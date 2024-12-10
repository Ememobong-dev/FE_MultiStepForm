import React from 'react';
import TopSideNav from './TopRightTitle';
import MultiSelectOptions from './MultiSelectOptions';


const addOnData = [
  {
    addOnName: "Online service",
    addOnDesc: "Access to multiplayer games ",
    addOnMonthlyRate: "1",
    addOnYearlyRate: "10"
  },
  {
    addOnName: "Larger storage",
    addOnDesc: "Extra 1TB of cloud save ",
    addOnMonthlyRate: "2",
    addOnYearlyRate: "20"
  },
  {
    addOnName: "Customizable profile",
    addOnDesc: "Custom theme on your profile ",
    addOnMonthlyRate: "2",
    addOnYearlyRate: "20"
  },
]



const StepThreeContent = () => {
  return (
    <div>
        <TopSideNav title='Pick add-ons' subTitle='Add-ons help enhance yur gaming experience.'  />
        <div className='my-5'>
          {
            addOnData.map( (option) => {
              return(
              <>
               <MultiSelectOptions addOnName={option.addOnName} 
                addOndesc={option.addOnDesc} 
                addOnRate={option.addOnMonthlyRate} />
              </>
              )
            } )
          }


        </div>
        
    </div>
  )
}

export default StepThreeContent;