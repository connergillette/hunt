import { ChangeEventHandler, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type?: string,
  value?: string | boolean,
  placeholder: string | '',
  name: string,
  onChange: ChangeEventHandler,
}

export default function Input({ type = 'text', value, name, placeholder, onChange }: Props) {
  return (
    <label className="flex flex-col">
      {placeholder}
      <input id={name} type={type} value={value} name={name} accept=".csv" className="rounded-md bg-gray-200 p-2 my-auto self-center text-black" onChange={onChange}></input>
    </label>
  )
}