'use client';

import React, { useState } from 'react';
import StepOneContent from './StepOneContent';
import BottomPagination from './BottomPagination';
import NavStep from './NavStep';


const stepArray = [
    {
        number: '1',
        stepInfo: 'Your Info'
    },
    {
        number: '2',
        stepInfo: 'select plan'
    },
    {
        number: '3',
        stepInfo: 'Add-ons'
    },
    {
        number: '4',
        stepInfo: 'Summary'
    },
]



export const Card = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleActiveClick = (index: number) => {
    setSelectedIndex(index)
  }

  const renderRightContent = () => {
    if(selectedIndex === 0) {
      return <StepOneContent />
    } else if(selectedIndex === 1) {
      return <StepOneContent />
    } else if(selectedIndex === 2) {
      return <StepOneContent />
    } else if(selectedIndex === 3) {
      return <StepOneContent />
    }
  }

  const handleGoBack = () =>{
    setSelectedIndex(selectedIndex - 1)
  }

  const handleNext = () => {
    setSelectedIndex(selectedIndex + 1)
}
 
  return (
    <div className='bg-white rounded-lg w-full p-5 flex gap-5'>
      <div className='nav_area w-[30%] '>
        <div className='rounded-lg  py-8 px-8 h-full w-full bg_image '>
          {
            stepArray.map((steps, index) => {
              return (
                <NavStep 
                    key={index}
                    stepNum={steps.number}
                    stepInfo={steps.stepInfo}
                    active={selectedIndex === index}
                    handleClick={() => handleActiveClick(index)}
                /> 
              )
            })
          }
        </div>
      </div>
      <div className='bg-white w-[70%] px-16 pt-8'>
        {
          renderRightContent()
        }

        <div className={`flex mt-20 ${ selectedIndex > 0 ? 'justify-between items-center' : 'justify-end'} `}>
          {
            selectedIndex > 0 && (
              <>
                <button className='bg-transparent text-cool_gray font-bold cursor-pointer hover:text-marine_blue' onClick={handleGoBack}>
                  Go Back
                </button>
              </>
            )
          }
          <button className='py-3 px-6 bg-marine_blue  hover:bg-purplish_blue rounded-lg text-white'
          onClick={handleNext}>
            {
              selectedIndex === 3 ? "Confirm" : "Next Step"
            }
          </button>
        </div>
      </div>
        
    </div>
  )
}
