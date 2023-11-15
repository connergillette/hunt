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

    // TODO: Parse raw CSV data
    fs.readFile(spreadsheet.filepath, 'utf8', (err, data) => {
      console.log(data)
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