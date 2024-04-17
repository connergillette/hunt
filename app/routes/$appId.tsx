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
    <div className="m-10 mt-[10%] mx-auto w-2/3">
      <div className="text-center">
        <a href={app.link} target="_blank" className="underline hover:opacity-80 transition-opacity text-white" rel="noreferrer"><h1 className="text-6xl max-md:text-2xl">{app.title}</h1></a>
      </div>
      <div className="flex text-4xl max-md:text-lg leading-relaxed gap-10 justify-center">
        <span>{app.company_name}</span>
        <span className="text-gray-400">{app.location}</span>
      </div>
      <div className="flex flex-col py-4 justify-center">
        <StatusChain app={app} updateStatus={updateStatus} />
      </div>
      <div className="flex flex-col w-min whitespace-nowrap mx-auto">
        <div className="flex">
          <div className="w-48 font-bold">Last updated</div>
          <div>{new Date(app.updated_at).toLocaleString()}</div>
        </div>
        <div className="flex">
          <div className="w-48 font-bold">Created at</div>
          <div>{new Date(app.created_at).toLocaleString()}</div>
        </div>
        <div className="flex">
          <div className="w-48 font-bold">Referrer</div>
          <div>{app.referrer || '-'}</div>
        </div>
        <div className="flex">
          <div className="w-48 font-bold">Note</div>
          <div>{app.note || '-'}</div>
        </div>
      </div>
    </div>
  )
}