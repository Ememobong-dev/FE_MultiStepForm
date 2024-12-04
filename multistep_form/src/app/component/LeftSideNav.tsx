import React from 'react';
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
  return (
    <div className='rounded-lg  py-3 px-5 h-full w-full bg_image '>
        {
            stepArray.map((steps, index) => {
                return (
                   <NavStep 
                        key={index}
                        stepNum={steps.number}
                        stepInfo={steps.stepInfo}
                    /> 
                )
            })
        }
    </div>
  )
}

export default LeftSideNav