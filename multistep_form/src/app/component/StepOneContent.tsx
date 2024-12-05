import React from 'react'
import TopSideNav from './TopRightTitle'
import FormInput from './FormInput'

const StepOneContent = () => {
  return (
    <div>
        <TopSideNav title='Personal info' subTitle='Please provide your name, email address, and phone number.'  />
        <div className='my-5'>
            {/* Name */}
            <FormInput inputFor='name' placeholder='e.g. Stephen King ' />
            {/* Email */}
            <FormInput inputFor='email address' placeholder='e.g. stephenking@lorem.com' />
            {/* Phone Number */}
            <FormInput inputFor='phone number' placeholder='e.g. +1 234 567 890' />

        </div>
    </div>
  )
}

export default StepOneContent