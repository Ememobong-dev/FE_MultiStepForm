import Image from 'next/image';
import React from 'react';
import thankYouImg from '@/app/assets/images/icon-thank-you.svg';

const ConfirmStep = () => {
  return (
    <div className='flex items-center justify-center h-[55vh]'>
      <div className='flex flex-col gap-3  items-center'>
        <Image src={thankYouImg} alt='' />
        <h2 className='text-marine_blue font-bold text-2xl text-center '>Thank You</h2>
        <p className='text-cool_gray text-center' >
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
        
        
    </div>
  )
}

export default ConfirmStep;