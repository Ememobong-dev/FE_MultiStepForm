import React from 'react';
import TopSideNav from './TopRightTitle';

const StepFourContent = () => {
  return (
    <div>
        <TopSideNav title='Finishing up' subTitle='Double-check everything looks OK before confirming.'  />
        <div className='bg-alabaster flex flex-col gap-4 py-4 px-5 rounded-xl' >
          <div className="flex justify-between items-center " >
            <div>
              <p className='text-marine_blue font-bold' >Arcade (Monthly)</p>
              <span className='cursor-pointer text-cool_gray underline hover:text-purple-800'>Change</span>
            </div>
            <p className='text-marine_blue font-bold'> $9/mo </p>
          </div>
          <hr />
          <div>
            <div className="flex justify-between items-center mb-4 " >
              <p className='text-cool_gray'>Online service</p>
              <p className='text-marine_blue font-semibold'> $1/mo </p>
            </div>
            <div className="flex justify-between items-center " >
              <p className='text-cool_gray'>Larger storage</p>
              <p className='text-marine_blue font-semibold'> $2/mo </p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center px-5 py-6'>
          <p className='text-cool_gray'>Total (per month)</p>
          <p className='text-purplish_blue text-xl font-bold'>+$12/mo</p>

        </div>
    </div>
  )
}

export default StepFourContent;