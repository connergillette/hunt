import { ChangeEventHandler, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type?: string,
  value?: string | boolean,
  placeholder: string | '',
  name: string,
  required?: boolean,
  onChange?: ChangeEventHandler,
}

export default function Input({ type = 'text', value, name, placeholder, onChange, required }: Props) {
  return (
    <label className="flex flex-col w-full text-xs leading-loose">
      {placeholder}
      <input id={name} type={type} value={value} name={name} accept=".csv" className="rounded-md text-base bg-gray-300 p-2 my-auto self-center text-black w-full" onChange={onChange} required={required || false}></input>
    </label>
  )
}