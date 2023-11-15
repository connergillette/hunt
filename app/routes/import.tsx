import { ActionFunction, redirect, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { createServerClient } from '@supabase/auth-helpers-remix'
import Button from '~/components/Button'
import Input from '~/components/Input'
const fs = require('fs')

export const action: ActionFunction = async ({ request }) => {
  const response = new Response()

  const supabase = createServerClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || '',
    { request, response }
  )

  const { data: { session }} = await supabase.auth.getSession()

  if (session) {
    // const uploadHandler = unstable_composeUploadHandlers(
    //   unstable_createFileUploadHandler({
    //     maxPartSize: 5_000_000,
    //     file: ({ filename }) => filename,
    //   }),
    // );
    // const formData = await unstable_parseMultipartFormData(
    //   request,
    //   uploadHandler
    // );
    // const spreadsheet = formData.get('spreadsheet')
    const uploadHandler = unstable_composeUploadHandlers(
      unstable_createFileUploadHandler({
        maxPartSize: 5_000_000,
        file: ({ filename }) => filename,
      }),
      // parse everything else into memory
      unstable_createMemoryUploadHandler()
    );
    const formData = await unstable_parseMultipartFormData(
      request,
      uploadHandler
    );
  
    const spreadsheet = formData.get("spreadsheet");

    fs.readFile(spreadsheet.filepath, 'utf8', async (err, data) => {
      const positions : object[] = []
      const rows = data.split('\n')
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i]
        // console.log(row)
        const rowSplit = row.split(',')
        let [company_name, title, location, with_referral, submitted, _, interviewed, received_offer, link, note] = rowSplit
        with_referral = with_referral === '' ? null : (with_referral === 'Y' ? true : false)
        submitted = submitted === '' ? null : (submitted === 'Y' ? true : false)
        interviewed = interviewed === '' ? null : (interviewed === 'Y' ? true : false)
        received_offer = received_offer === '' ? null : (received_offer === 'Y' ? true : false)
        positions.push({ company_name, title, location, with_referral, submitted, interviewed, received_offer, link, note, user_id: session.user.id })
      }
      const { error, data: insertResponse } = await supabase.from('job_applications').insert(positions)
      // TODO: Handle errors
    })

    return redirect('/')
  }

  return redirect('/')
}
export default function Import () {
  return (
    <Form method="post" encType="multipart/form-data">
      <Input type="file" name="spreadsheet" />
      <Button>Submit</Button>
    </Form>
  )
}