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
    const updatePayload = { updated_at: 'now()' }
    Object.keys(updatePayload).push(toggleField)
    updatePayload[toggleField] = !data[0][toggleField]

    await supabase.from('job_applications').update(updatePayload).eq('id', appId)
  }

  return redirect('/')
}

export default function UpdateApplication() {

}