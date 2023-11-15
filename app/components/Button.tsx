import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type?: string
}

export default function Button ({ type, children }: Props) {
  return (
    <button className="p-2 bg-gray-600 rounded-md h-min w-min text-white self-end" type={type}>{children}</button>
  )
}