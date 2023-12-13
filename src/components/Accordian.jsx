import React, { useState } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
<RxCross2 />

const Accordian = ({AccData, showBody, setShowBody}) => {
  return (
    // Header
    <div>
        <div onClick={()=>{setShowBody(!showBody)}} className='w-full flex items-center justify-between bg-stone-700 hover:bg-stone-600 transition-all px-6 py-4 cursor-pointer mb-[1px]'>
            <span className='text-white text-2xl'>{AccData.title}</span>
            {showBody?<RxCross2 className='text-4xl'/> : <FiPlus className='text-5xl'/>
            }
        </div>

        {/* body */}
        {showBody && <div className='w-full text-2xl px-6 py-4 bg-stone-700'>
            <p>{AccData?.description1}</p>
            {AccData.description2 && <p><br />{AccData?.description2}</p>}
        </div>}
    </div>
  )
}

export default Accordian
