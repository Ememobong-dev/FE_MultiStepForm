import React from 'react';

const TopSideNav = ({title, subTitle} : {title: string , subTitle: string}) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
        <h2 className='text-marine_blue  font-bold text-3xl '> {title} </h2>
        <p className='text-cool_gray '> {subTitle} </p>
    </div>
  )
}

export default TopSideNav;