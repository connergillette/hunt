import { ActionFunction, redirect } from '@remix-run/node'
import { createServerClient } from '@supabase/auth-helpers-remix'

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )

  const { data: { session }} = await supabase.auth.getSession()

  if (session) {
    const formData = await request.formData()
    const company_name = formData.get('company_name')
    const title = formData.get('title')
    const location = formData.get('location')
    const with_referral = !!formData.get('referrer')
    const referrer = formData.get('referrer')
    // const submitted = !!formData.get('submitted')
    const submitted = true
    const link = formData.get('link')

    const { error } = await supabase.from('job_applications').insert({
      company_name, title, location, with_referral, referrer, submitted, link, user_id: session.user.id
    })

    if (!error) {
      return redirect('/')
    } else {
      console.log(error)
      return { error }
    }
  }

  return redirect('/')
}

export const loader = () => {
  return redirect('/')
}