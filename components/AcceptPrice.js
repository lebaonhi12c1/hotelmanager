'use client'

import React, { memo, useContext, useState } from 'react';
import ClientOption from './ClientOption';
import {FiChevronDown} from 'react-icons/fi'
import { useRouter } from 'next/navigation';
import { filterContext } from '@/context/filter';
import { getToastError } from '@/hooks/toast';
function AcceptPrice( { button_title }) {
    const {filter, setFilter} = useContext(filterContext)
    const [isClientOption,setIsClientOption] = useState(false)
    const route = useRouter()
    const handleFilterRooms = () =>
    {
        if( new Date( filter.startDate ).getTime() >= new Date( filter.endDate ).getTime() )
        {
            getToastError( 'Khoảng ngày đến và ngày đi của bạn không hợp lệ', 5000)
            return;
        }

        if( new Date( filter.startDate).getTime() < new Date() )
        {
            getToastError( 'Khoảng ngày đến và ngày đi của bạn không hợp lệ', 5000)
            return;
        }

        route.push(`/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }`)
    }
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
                        <input
                            type='date'
                            value={filter.startDate}
                            onChange={(e)=>{
                                setFilter(
                                    {
                                        ...filter,
                                         startDate: e.target.value
                                    }
                                )
                            }}
                        />
                    </div>
                    <div className=' border border-slate-400 p-2 w-full'>
                        <div className='text-[10px] text-slate-400'>
                            Trả phòng
                        </div>
                        <input type="date" 
                            value={filter.endDate}
                            onChange={(e)=>{
                                setFilter(
                                    {
                                        ...filter,
                                         endDate: e.target.value
                                    }
                                )
                            }}
                        />
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
                            { filter.adult } khách, { filter.child.length } trẻ em
                        </span>
                        <div>
                            <FiChevronDown/>
                        </div>
                    </div>
                <ClientOption isOpen={isClientOption} handleClose={setIsClientOption}/>
                </div>
                <div className='bg-primary text-white uppercase flex items-center justify-center font-bold p-4 lg:p-0 rounded-lg hover:shadow-primary/70 hover:shadow-lg duration-150 active:scale-95 select-none cursor-pointer'
                    onClick={handleFilterRooms}
                >
                    {
                        button_title
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(AcceptPrice);