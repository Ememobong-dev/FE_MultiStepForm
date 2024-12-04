import React from 'react';
import TopSideNav from './TopRightTitle';
import LeftSideNav from './LeftSideNav';

export const Card = () => {
  return (
    <div className='bg-white rounded-lg w-full p-5 flex gap-5'>
      <div className='nav_area w-[40%] '>
        <LeftSideNav />
      </div>
      <div className='bg-white w-[60%] '>
        <TopSideNav title='Personal Info' subTitle='Please provide your name, email address, and phone number.'  />
        <h1>Hello World</h1>
      </div>
        
    </div>
  )
}
