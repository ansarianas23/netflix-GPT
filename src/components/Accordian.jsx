import React, { useState } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
<RxCross2 />

const Accordian = ({AccData, showBody, setShowBody}) => {
  return (
    // Header
    <div className='w-full h-fit overflow-hidden'>
        {/* Accordian Header */}
        <div onClick={()=>{setShowBody(!showBody)}} className='w-full flex items-center justify-between bg-stone-700 hover:bg-stone-600 transition-all px-3 lg:px-6 py-2 lg:py-4 cursor-pointer mb-[1px] relative z-30'>
            <span className='text-white text-lg lg:text-2xl'>{AccData.title}</span>
            <FiPlus className={`text-2xl lg:text-5xl ${showBody? "rotate-45":"rotate-0"} transition-all delay-75`}/>
        </div>

        {/* body */}
        {showBody && <div className='w-full text-lg lg:text-2xl px-6 py-4 bg-stone-700'>
            <p>{AccData?.description1}</p>
            {AccData.description2 && <p><br />{AccData?.description2}</p>}
        </div>}
        
        {/* <div className={`w-full text-2xl px-6 py-4 bg-stone-700 ${showBody? "-translate-y-0" : "-translate-y-full transition-transform ease-in-out"} `}>
            <p>{AccData?.description1}</p>
            {AccData.description2 && <p><br />{AccData?.description2}</p>}
        </div> */}
    </div>
  )
}

export default Accordian
