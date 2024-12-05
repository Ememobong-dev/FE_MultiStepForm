import React from 'react'

const FormInput = ({inputFor, placeholder}: {inputFor : string, placeholder:string}) => {
  return (
    <div className='my-5'>
        <label className='text-marine_blue capitalize text-sm' htmlFor={inputFor}>
            {inputFor}
        </label>
        <input className={`w-full rounded-lg mt-1 font-semibold border outline-1 py-3 px-5 text-marine_blue text-sm  focus:outline-purple-800 placeholder:text-cool_gray placeholder:font-normal focus:outline-1   `} placeholder={placeholder} type="text" />
    </div>
  )
}

export default FormInput