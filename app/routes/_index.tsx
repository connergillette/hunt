import { ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from '@remix-run/node'
import { createServerClient } from '@supabase/auth-helpers-remix'
import { useActionData, useLoaderData } from 'react-router'

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

  return (
    <div>
      <h1 className="text-2xl w-full text-center pt-10">Hello, {session.user.email}!</h1>
      <div className="flex flex-col p-10">
        {
          jobApps.map((app) => (
            <div className="w-full h-24">
              {app.company_name} - {app.title}
            </div>
          ))
        }
      </div>
    </div>
  );
}
