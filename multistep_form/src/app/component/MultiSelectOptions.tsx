import React, { useState } from 'react';

const MultiSelectOptions = ({addOnMode, addOnRate ,addOnName, addOndesc, }: {addOnRate: string, addOnName:string, addOndesc:string, addOnMode?:boolean ,checked?:boolean, }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleSelectOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("I am checked? : ", e.target.checked)
        setIsChecked(e.target.checked);
    }           

  return (
    <div>
        <div className={`border border-purple-800 py-3 px-5 mb-4 rounded-xl flex justify-between items-center bg-transparent ${isChecked ? 'bg-magnolia' : ''} `}>
            <div className='flex gap-3'>
                <input type="checkbox" onChange={handleSelectOptions } checked={isChecked} name={addOnName} id=""  />
                <div>
                    <p className='text-marine_blue font-bold ' >{addOnName}</p>  
                    <p className=' text-cool_gray'> {addOndesc} </p>
                </div>

            </div>
            <div>
                <p className='text-purplish_blue'> + ${addOnRate}{addOnMode ? "/yr" : "/mo" } </p>   
            </div>

        </div>
    </div>
  )
}

export default MultiSelectOptions