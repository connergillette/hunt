import { Form } from '@remix-run/react'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  status: string
  field: string | null,
  appId: string
}

export default function Status({ status, field, appId, children }: Props) {
  const statusColors = {
    'good': 'bg-green-400 text-black',
    'bad': 'bg-red-400 text-black',
    'neutral': 'bg-yellow-200 text-black',
    default: 'bg-transparent'
  }
  return (
    <Form method="post" action={`/${appId}/update`}>
      <button name="status" value={field} type="submit" className={`${statusColors[status]} py-1 px-2 rounded-md text-xs`} disabled={field == null}>{children}</button>
    </Form>
  )
}