import React from 'react';

const TopSideNav = ({title, subTitle} : {title: string , subTitle: string}) => {
  return (
    <div className="flex flex-col">
        <h2 className='text-[hsl(213, 96%, 18%)]'> {title} </h2>
        <p className='text-[ hsl(229, 24%, 87%)]'> {subTitle} </p>
    </div>
  )
}

export default TopSideNav;