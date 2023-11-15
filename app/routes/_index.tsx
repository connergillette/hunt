import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { createServerClient } from '@supabase/auth-helpers-remix'
import { useEffect, useRef, useState } from 'react'
import { useActionData, useLoaderData } from 'react-router'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Status from '~/components/Status'

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )

  const { data: { session }} = await supabase.auth.getSession()

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

  return (
    <div>
      <div className="flex flex-col p-10 gap-2 text-white/50">
        <Form action="/create" method="post" ref={formRef}>
          <div className="flex gap-2 flex-nowrap">
            <Input name="company_name" placeholder={'Company Name'}></Input>
            <Input name="title" placeholder={'Job Title'}></Input>
            <Input name="location" placeholder={'Location'}></Input>
            <Input name="referrer" placeholder={'Referrer'}></Input>
            <Input name="submitted" placeholder={'Submitted?'} type="checkbox" value={true}></Input>
            <Input name="link" placeholder={'Link'}></Input>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
        {
          jobApps.map((app) => (
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
                  {app.with_referral ? <Status status="good" appId={app.id}>{app.referrer || 'Referred'}</Status> : <Status status="neutral" appId={app.id}>No referral</Status>}
                </div>
                <div>
                  {app.submitted ? <Status status="good" field="submitted" appId={app.id}>Submitted</Status> : <Status status="neutral" field="submitted" appId={app.id}>Not submitted</Status>}
                </div>
                <div>
                  {app.submitted && app.interviewed == null && <Status status="neutral" field="interviewed" appId={app.id}>Pending response</Status>}
                  {
                    app.submitted && app.interviewed != null && (
                      app.interviewed ? <Status status="good" field="interviewed" appId={app.id}>Interviewed</Status> : <Status status="bad" field="interviewed" appId={app.id}>No interview</Status>
                    )
                  }
                </div>
                <div>
                  {app.interviewed && app.received_offer == null && (<Status status="neutral" field="received_offer" appId={app.id}>Pending offer</Status>)}
                  {app.interviewed && app.interviewed && app.received_offer != null && (
                    app.received_offer ? <Status status="good" field="received_offer" appId={app.id}>Received offer</Status> : <Status status="bad" field="received_offer" appId={app.id}>No offer</Status>
                  )}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
