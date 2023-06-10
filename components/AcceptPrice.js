'use client'

import React, { memo, useState } from 'react';
import ClientOption from './ClientOption';
import {FiChevronDown} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { filterSelect, setEndDate, setStartDate } from '@/store/reducer/filter';
function AcceptPrice(props) {
    const dispatch = useDispatch()
    const filter = useSelector(filterSelect)
    console.log(filter)
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
                        <input type="date" value={filter.startDate} onChange={e=>dispatch(setStartDate(e.target.value))} />
                    </div>
                    <div className=' border border-slate-400 p-2 w-full'>
                        <div className='text-[10px] text-slate-400'>
                            Trả phòng
                        </div>
                        <input type="date" value={filter.endDate} onChange={e=>dispatch(setEndDate(e.target.value))} />
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
                        <span>
                            {filter.adult + filter.child} khách
                        </span>
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

export default memo(AcceptPrice);