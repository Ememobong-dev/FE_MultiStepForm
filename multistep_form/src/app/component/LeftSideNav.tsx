'use client'

import React, { useState } from 'react';
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



const LeftSideNav = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleActiveClick = (index: number) => {
        setSelectedIndex(index)
    }

  return (
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
  )
}

export default LeftSideNav