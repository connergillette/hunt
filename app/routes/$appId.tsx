import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { createServerClient } from '@supabase/auth-helpers-remix'
import { useState } from 'react'
import StatusChain from '~/components/StatusChain'

interface Props {

}

export const loader = async ({ request, params }: LoaderArgs) => {
  const response = new Response()
  // an empty response is required for the auth helpers
  // to set cookies to manage auth

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )
  const { data: { session }} = await supabase.auth.getSession()
  const appId = params['appId']

  if (session) {
    const appResponse = await supabase.from('job_applications').select().order('updated_at', { ascending: false }).eq('id', appId).eq('user_id', session.user.id)
    let app = null

    if (!appResponse.error) {
      app = appResponse.data[0]
    }

    return json({ app, session })
  }
  return json({})
}

export default function AppDetail({}: Props) {
  const { app } = useLoaderData()
  const [data, setData] = useState(app)

  const updateStatus = (field) => {
    const copy = data
    copy[field] = !copy[field]

    setData(copy)
  }
  
  return (
    <div className="m-10">
      <a href={app.link} target="_blank" className="underline hover:opacity-80 transition-opacity" rel="noreferrer"><h1 className="text-6xl">{app.title}</h1></a>
      <div className="flex text-4xl leading-relaxed gap-10"><span>{app.company_name}</span><span className="text-gray-400">{app.location}</span></div>
      <div className="flex flex-col py-4 w-min">
        <StatusChain app={app} updateStatus={updateStatus} />
      </div>
    </div>
  )
}