import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { createServerClient } from '@supabase/auth-helpers-remix'
import { useEffect, useRef, useState } from 'react'
import { useActionData, useLoaderData } from 'react-router'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Status from '~/components/Status'
import StatusChain from '~/components/StatusChain'
import ExternalIcon from '~/assets/external.svg'

export const action: ActionFunction = async ({ request }) => {
  // const response = new Response()

  // const supabase = createServerClient(
  //   process.env.SUPABASE_URL || '',
  //   process.env.SUPABASE_KEY || '',
  //   { request, response }
  // )

  // const { data: { session }} = await supabase.auth.getSession()

  // ...perform action

  return redirect('/')
}

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const response = new Response()
  // an empty response is required for the auth helpers
  // to set cookies to manage auth

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )
  const { data: { session }} = await supabase.auth.getSession()

  if (session) {
    const appResponse = await supabase.from('job_applications').select().order('updated_at', { ascending: false }).eq('user_id', session.user.id)
    let jobApps = []

    if (!appResponse.error) {
      jobApps = appResponse.data
    }

    return json({ jobApps, session })
  }
  return json({})
}

export default function Index() {
  const { jobApps, session } = useLoaderData()
  const actionData = useActionData()
  const formRef = useRef(null)

  const [companyNameQuery, setCompanyNameQuery] = useState('')
  const [queriedData, setQueriedData] = useState(jobApps)

  useEffect(() => {
    setQueriedData(jobApps.filter((row) => row.company_name.includes(companyNameQuery)))
  }, [companyNameQuery, jobApps])

  useEffect(() => {
    formRef.current?.reset()
  }, [jobApps])

  if (!session) {
    return (
      <div>
        <h1 className="text-center text-4xl font-bold">Hunt</h1>
      </div>
    )
  }

  const updateStatus = (field, index) => {
    const copy = queriedData
    const item = copy[index]
    item[field] = !item[field]

    copy[index] = item

    setQueriedData(copy)
  }

  return (
    <div>
      <div className="flex flex-col p-10 max-lg:p-0 gap-2 text-white/50">
        <Form action="/create" method="post" ref={formRef}>
          <div className="flex max-lg:flex-col gap-3 flex-nowrap">
            <div className="w-full flex flex-col gap-1 rounded-md bg-gray-700 py-2 px-4">
              <Input name="company_name" placeholder={'Company Name'} onChange={(e) => setCompanyNameQuery(e.target.value || '')} required></Input>
              <Input name="title" placeholder={'Job Title'} required></Input>
              <Input name="location" placeholder={'Location'} required></Input>
            </div>
            <div className="w-full flex flex-col gap-1 p-2">
              <Input name="referrer" placeholder={'Referrer'}></Input>
              <Input name="note" placeholder={'Note'}></Input>
              <div className="flex gap-3">
                <Input name="link" placeholder={'Link'} required></Input>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </div>
        </Form>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 px-4 py-2">
            <div className="flex gap-4 whitespace-nowrap max-lg:text-xs">
              { 
                queriedData.length !== jobApps.length ? (
                  <div className="px-4 py-2 rounded-md bg-green-600">{queriedData.length} filtered entries</div>
                ) : (
                  <>
                    <div className="px-4 py-2 rounded-md bg-slate-600">{queriedData.filter((entry) => entry.submitted).length} submitted</div>
                    <div className="px-4 py-2 rounded-md bg-slate-600">{queriedData.filter((entry) => entry.interviewed).length} interviews</div>
                    <div className="px-4 py-2 rounded-md bg-slate-600">{jobApps.length} total entries</div>
                  </>
                )
              }
            </div>
            <div className="flex w-full rounded-md gap-10 whitespace-nowrap text-gray-200 font-bold max-lg:hidden">
              <div className="flex w-full">
                <div className="w-48 font-bold flex">
                  Company Name
                </div>
                <div className="flex w-1/3">
                  Job Title
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex w-24">
                  Location
                </div>
                <div className="w-64 flex gap-2 grow justify-end">
                  Status
                </div>
              </div>
            </div>
          </div>
          {
            queriedData.map((app, index) => (
              <div className="flex max-lg:flex-col w-full p-4 bg-gray-700 rounded-md gap-10 max-lg:gap-4 whitespace-nowrap max-md:whitespace-normal text-gray-200 transition-colors" key={app.id}>
                <div className="flex max-lg:gap-10 w-full">
                  <div className="w-48 max-lg:w-min font-bold flex">
                    {app.company_name}
                  </div>
                  <div className="flex max-lg:w-full h-full">
                    <a href={app.id} className="underline hover:opacity-80 transition-opacity">
                      {app.title}
                    </a>
                    <a href={app.link} target="_blank" rel="noreferrer" className="flex items-center px-2 underline pb-0 h-full w-full hover:opacity-100 opacity-40 transition-opacity">
                      <img src={ExternalIcon} />
                    </a>
                  </div>
                </div>
                <div className="flex max-lg:gap-4 w-full">
                  <div className="flex w-24 max-lg:w-min whitespace-nowrap">
                    {app.location}
                  </div>
                  <div className="justify-end grow">
                    <StatusChain app={app} updateStatus={updateStatus} index={index} />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
