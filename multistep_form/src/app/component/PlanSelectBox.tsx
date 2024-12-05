import Image from 'next/image'
import React from 'react'

const PlanSelectBox = ({image, planName, planRate, selectedPlan, handleSelectClick, planMode } : {image: string, planName:string, planRate: string, selectedPlan?:boolean, handleSelectClick: () => void, planMode: boolean}) => {
  return (
    <div className={` border border-light_gray  cursor-pointer rounded-lg bg-transparent w-36  flex flex-col gap-10 py-5 px-5 hover:border-purple-800 ${selectedPlan ? 'bg-alabaster border-purple-800' : ''} `} onClick={handleSelectClick} >
        <span>
            <Image src={image} alt={planName} />
        </span>
        <div>
            <p className=' text-base text-marine_blue  font-bold'> {planName} </p>
            <p className='text-cool_gray text-sm'>
                ${planRate}{planMode ? "/yr" : "/mo" }
            </p>
            {
                planMode && <p className='text-marine_blue text-sm'>2 months free</p>
            }

        </div>
        
    </div>
  )
}

export default PlanSelectBox