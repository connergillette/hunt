import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  status: string
  field?: string,
  updateFunction?: Function
}

export default function Status({ status, field, children, updateFunction }: Props) {

  const statusColors = {
    'good': 'bg-green-400 text-black',
    'bad': 'bg-red-400 text-black',
    'neutral': 'bg-yellow-200 text-black',
    default: 'bg-transparent'
  }

  return (
    <button type="button" onClick={updateFunction} className={`${statusColors[status]} py-1 px-2 rounded-md text-xs ${updateFunction && 'hover:opacity-80 cursor-pointer'} transition z-10`} disabled={!updateFunction}>{children}</button>
  )
}