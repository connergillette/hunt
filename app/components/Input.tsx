import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type: string | 'text',
  value: string,
  placeholder: string | '',
  name: string,
}

export default function Input({ type = 'text', value, name, placeholder }: Props) {
  return (
    <label className="flex flex-col">
      {placeholder}
      <input id={name} type={type} value={value} name={name} className="rounded-md bg-gray-200 p-2 my-auto self-center text-black"></input>
    </label>
  )
}