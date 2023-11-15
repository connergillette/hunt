import { ActionArgs, ActionFunction, redirect } from '@remix-run/node'
import { createServerClient } from '@supabase/auth-helpers-remix'

export const action : ActionFunction = async ({ request, params }: ActionArgs) => {
  const response = new Response()

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )

  const { data: { session }} = await supabase.auth.getSession()

  if (session) {
    const appId = params['appId']

    const formData = await request.formData()
    const toggleField = (formData.get('status') || '').toString()

    const { error: fetchError, data } = await supabase.from('job_applications').select(toggleField.toString()).eq('id', appId)
    console.log(data[0][toggleField])
    const updatePayload = {}
    Object.keys(updatePayload).push(toggleField)
    updatePayload[toggleField] = !data[0][toggleField]

    console.log(updatePayload)

    const updateData = await supabase.from('job_applications').update(updatePayload).eq('id', appId)
    console.log(updateData)
  }

  return redirect('/')
}

export default function UpdateApplication() {

}