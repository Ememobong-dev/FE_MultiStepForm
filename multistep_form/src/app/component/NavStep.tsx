import React from 'react';

const NavStep = ({active, stepNum, stepInfo}: {active?:boolean, stepNum:string, stepInfo:string }) => {
  return (
    <div className='flex gap-3 items-center cursor-pointer py-3 ' >
        <div className={` ${active ? "bg-light_gray text-marine_blue" : " text-white  bg-transparent "} border border-white flex justify-center items-center font-bold rounded-full  w-8 h-8   `}>
            {stepNum}
        </div>
        <div className='flex flex-col'>
            <p className=' uppercase text-[12px] text-light_gray ' >
                step {stepNum}
            </p>
            <h3 className='uppercase text-[14px] font-bold  text-white'>
                {stepInfo}
            </h3>
        </div>
        
    </div>
  )
}

export default NavStep