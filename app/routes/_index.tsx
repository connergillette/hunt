import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { createServerClient } from '@supabase/auth-helpers-remix'
import { useEffect, useRef, useState } from 'react'
import { useActionData, useLoaderData } from 'react-router'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Status from '~/components/Status'

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
  }, [companyNameQuery])

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
      <div className="flex flex-col p-10 gap-2 text-white/50">
        <Form action="/create" method="post" ref={formRef}>
          <div className="flex gap-3 flex-nowrap">
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
          <div className="flex w-full px-4 py-2 rounded-md gap-10 whitespace-nowrap text-gray-200 font-bold">
            <div className="w-48 font-bold flex">
              Company Name
            </div>
            <div className="flex w-1/3">
              Job Title
            </div>
            <div className="flex w-24">
              Location
            </div>
            <div className="w-64 flex gap-2 grow justify-end">
              Status
            </div>
          </div>
          {
            queriedData.map((app, index) => (
              <div className="flex w-full p-4 bg-gray-700 rounded-md gap-10 whitespace-nowrap text-gray-200" key={app.id}>
                <div className="w-48 font-bold flex">
                  {app.company_name}
                </div>
                <div className="flex w-1/3">
                  {app.title}
                </div>
                <div className="flex w-24">
                  {app.location}
                </div>
                <div className="w-64 flex gap-2 justify-end grow">
                  <div>
                    <Status status={app.with_referral ? "good" : "neutral"} appId={app.id}>{app.with_referral ? (app.referrer || 'Referred') : 'No referral'}</Status>
                  </div>
                  <div>
                    <Status status={app.submitted ? "good" : "neutral"} field="submitted" appId={app.id} updateFunction={() => { updateStatus('submitted', index) }}>{app.submitted ? 'Submitted' : 'Not submitted'}</Status>
                  </div>
                  <div>
                    {app.submitted && app.interviewed == null && <Status status="neutral" field="interviewed" updateFunction={() => { updateStatus('interviewed', index) }} appId={app.id}>Pending response</Status>}
                    {
                      app.submitted && app.interviewed != null && (
                        <Status status={app.interviewed ? 'good' : 'bad'} field="interviewed" appId={app.id} updateFunction={() => { updateStatus('interviewed', index) }}>{app.interviewed ? 'Interviewed' : 'No interview'}</Status>
                      )
                    }
                  </div>
                  <>
                    {app.interviewed && app.received_offer == null && (<Status status="neutral" field="received_offer" appId={app.id} updateFunction={() => { updateStatus('received_offer', index) }}>Pending offer</Status>)}
                    {app.interviewed && app.interviewed && app.received_offer != null && (
                      <Status status={app.receieved_offer ? 'good' : 'bad'} field="received_offer" appId={app.id} updateFunction={() => { updateStatus('received_offer', index) }}>{app.received_offer ? 'Received offer' : 'No offer'}</Status>
                    )}
                  </>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
