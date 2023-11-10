import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  status: string,
}

export default function Status({ status, children }: Props) {
  const statusColors = {
    'good': 'bg-green-300 text-black',
    'bad': 'bg-red-300 text-black',
    'neutral': 'bg-yellow-100 text-black',
    default: 'bg-transparent'
  }
    return (
      <span className={`${statusColors[status]} py-1 px-2 rounded-md`}>{children}</span>
    )
}