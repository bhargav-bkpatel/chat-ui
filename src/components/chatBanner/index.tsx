import React from 'react'
import DoubelTreuIcon from '../commons/icons/doubelTreuIcon'

const CheatBanner = () => {
    return (
        <div>
            <div className="w-full mt-[17px]">
                <span className='text-sm text-brand-darkGray font-normal text-center w-full flex items-start justify-center  '>8/20/2020</span>

           <div className='flex flex-col items-center'>
           <div className='bg-[#007AFF] rounded-[6px] px-[8px] py-[4px] flex  '>
                 
                        <span className='text-sm text-white '>Hi team 👋</span>
                        <div className='flex items-center justify-end gap-[4px] mt-[21px]'>
                            <span className='text-xs text-white'>11:31 AM</span> <DoubelTreuIcon />
                            </div>
                    
                </div>
           </div>
            </div>
        </div>
    )
}

export default CheatBanner