'use client'

import { filterSelect } from '@/store/reducer/filter';
import React from 'react';
import { memo } from 'react';
import { useState } from 'react';
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import { useSelector } from 'react-redux';
function SearchRoom({value}) {

    const {filter, addFilterRooms, removeItemRoomsFilter} = useSelector(filterSelect)
    console.log(filter)
    const [adult,setAdult] = useState(2)
    const [child,setChild] = useState(1)

    const handleSetCountAdult = type =>
    {
        switch (type) {
            case 'plus':
                adult < 4 && setAdult(adult + 1)
                break
            case 'minus':
                adult > 1 && setAdult(adult - 1)
                break
            default:
                break
        }
    }
    
    const handleSetCountChild = type =>
    {
        switch (type) {
            case 'plus':
                child < 3 && setChild(child + 1)
                break
            case 'minus':
                child > 1 && setChild(child - 1)
                break
            default:
                break
        }
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className='font-bold'>
                Phòng {value.number}
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-slate-400'>
                    Số lượng khách
                </div>
                <div className='flex items-center justify-between border border-slate-200 p-1 rounded-md'>
                    <div className={`text-[24px] ${adult > 1 ? 'text-primary' : 'text-slate-400'}`}
                        onClick={()=>handleSetCountAdult('minus')}
                    >
                        <AiOutlineMinusCircle/>
                    </div>
                    <div className='text-primary'>
                        {adult} người lớn
                    </div>
                    <div className={`text-[24px] ${adult < 4 ? 'text-primary' : 'text-slate-400'}`}
                        onClick={()=>handleSetCountAdult('plus')}
                    >
                        <AiOutlinePlusCircle/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-slate-400'>
                    Số lượng trẻ em
                </div>
                <div className='flex items-center justify-between border border-slate-200 p-1 rounded-md'>
                    <div className={`text-[24px] ${child > 1 ? 'text-primary' : 'text-slate-400'}`}
                        onClick={()=>handleSetCountChild('minus')}
                    >
                        <AiOutlineMinusCircle/>
                    </div>
                    <div className='text-primary'>
                        {child} trẻ em
                    </div>
                    <div className={`text-[24px] ${child < 3 ? 'text-primary' : 'text-slate-400'}`}
                        onClick={()=>handleSetCountChild('plus')}
                    >
                        <AiOutlinePlusCircle/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(SearchRoom);