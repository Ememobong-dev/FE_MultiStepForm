"use client";
import React, { useState } from 'react';
import TopSideNav from './TopRightTitle';
import icon1 from '@/app/assets/images/icon-arcade.svg';
import icon2 from '@/app/assets/images/icon-advanced.svg';
import icon3 from '@/app/assets/images/icon-pro.svg';
import PlanSelectBox from './PlanSelectBox';

const planData = [
    {
        image : icon1,
        planName: "Arcade",
        planMonthlyRate: "9",
        yearlyPlanRate: "90"
    },
    {
        image : icon2,
        planName: "Advanced",
        planMonthlyRate: "12",
        yearlyPlanRate: "120"
    },
    {
        image : icon3,
        planName: "Pro",
        planMonthlyRate: "15",
        yearlyPlanRate: "150"
    },
]

const StepTwoContent = () => {
    const [selectedPlan, setSelectedPlan] = useState('');
    const [isSwitchChecked, setIsSwitchChecked] = useState(false)


    const handleSelectClick = (item: string) => {
        setSelectedPlan(item)
    }

    const handlePlanInput = (prev: boolean) => {
        setIsSwitchChecked(!prev)
    }
  return (
    <div>
        <TopSideNav title='Select your plan' subTitle='You have the option of monthly or yearly billing.'  />
        <div>
            <div className="flex justify-between">
                {
                    planData.map( (plans) => {
                        return (
                            <PlanSelectBox key={plans.planName}
                                image={plans.image} planName={plans.planName}
                                planRate={ isSwitchChecked ? plans.yearlyPlanRate : plans.planMonthlyRate}
                                selectedPlan={selectedPlan === plans.planName}
                                handleSelectClick={() => handleSelectClick(plans.planName)}
                                planMode={isSwitchChecked}
                            />
                        )
                    })
                }
            </div>
            <div className='rounded-lg bg-alabaster my-10 py-4 px-10 flex justify-center gap-8'>
                <p className={ ` ${!isSwitchChecked ? 'text-marine_blue font-bold' : 'text-cool_gray'} `} >Monthly</p>
                {/* Tailwind Switch Toggle */}
                <label className="inline-flex items-center justify-center cursor-pointer">
                    <input
                    type="checkbox"
                    className="sr-only peer peer-focus:outline-none" 
                    onClick={() => handlePlanInput(isSwitchChecked) }
                    />
                    <div className="relative w-11 h-6 bg-marine_blue focus:outline-none peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-marine_blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-marine_blue"></div>
                </label>
                <p className={ ` ${isSwitchChecked ? 'text-marine_blue font-bold' : 'text-cool_gray'} `}>Yearly</p>
            </div>

        </div>
    </div>
  )
}

export default StepTwoContent