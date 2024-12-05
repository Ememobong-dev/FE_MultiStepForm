import React from 'react'

const BottomPagination = () => {
  return (
    <div className='flex justify-between items-center mt-20'>
      <button className='bg-transparent text-cool_gray font-bold cursor-pointer hover:text-marine_blue  '>
          Go Back
      </button>
      <button className='py-3 px-6 bg-marine_blue hover:bg-purplish_blue rounded-lg text-white'>
          Next Step
      </button>
    </div>
  )
}

export default BottomPagination