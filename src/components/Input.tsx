import React from 'react'
interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string
    type?: string,
    value?: string,
    onChange?: (e: any) => void,
  
} 
const Input = ({
    label,
    type = 'text',
    ...props
}: Props) => {
  return (
    <div className='container mx-auto'>
        <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <input className='border border-gray-300 p-2 rounded-md w-full' type={type} {...props}/>
    </div>
  )
}

export default Input