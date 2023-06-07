'use client'

import React, { useState } from 'react';
import ClientOption from './ClientOption';
import {FiChevronDown} from 'react-icons/fi'
function AcceptPrice(props) {
    const [dateValue,setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })

    const [isClientOption,setIsClientOption] = useState(false)
    return (
        <div className='flex flex-col gap-4'>
            <div>
                Kiểm tra phòng và giá cả
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                <div className='flex items-center flex-col lg:flex-row rounded-sm overflow-hidden'>
                    <div className=' border border-slate-400 p-2 w-full'>
                        <div className='text-[10px] text-slate-400'>
                            Nhận phòng
                        </div>
                        <input type="date" onChange={e=>setDateValue({...dateValue,startDate:e.target.value})} />
                    </div>
                    <div className=' border border-slate-400 p-2 w-full'>
                        <div className='text-[10px] text-slate-400'>
                            Trả phòng
                        </div>
                        <input type="date" onChange={e=>setDateValue({...dateValue,endDate:e.target.value})} />
                    </div>
                </div>
                <div className={`border border-slate-400 p-2 rounded-sm relative cursor-pointer ${isClientOption && 'bg-primary text-white'}`}
                    onClick={(e)=>{
                        e.stopPropagation()
                        setIsClientOption(!isClientOption)
                    }}
                >
                    <div className='text-[10px] text-slate-400'>
                        Phỏng
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>3 Khách</span>
                        <div>
                            <FiChevronDown/>
                        </div>
                    </div>
                    <ClientOption isOpen={isClientOption} handleClose={setIsClientOption}/>
                </div>
                <div className='bg-secondary text-white uppercase flex items-center justify-center font-bold p-4 lg:p-0 rounded-sm'>
                    nhận giá
                </div>
            </div>
        </div>
    );
}

export default AcceptPrice;