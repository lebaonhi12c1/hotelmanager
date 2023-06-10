'use client'

import { filterSelect, setPersonRoom } from '@/store/reducer/filter';
import React from 'react';
import { memo } from 'react';
import { useState } from 'react';
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
function ClientOption({isOpen,handleClose}) {
    const dispatch = useDispatch()
    const [adult,setAdult] = useState(2)
    const [child,setChild] = useState(0)
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

    const handleSubmit = () =>
    {
        dispatch(setPersonRoom({adult,child}))
        handleClose(false)
    }
    return (
        isOpen && 
        <div className='flex flex-col gap-4 absolute top-full left-0 rounded-lg z-40 bg-white p-4 w-full shadow-lg shadow-slate-700'
            onClick={e=>e.stopPropagation()}
        >
            <div className='flex flex-col gap-4'>   
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-slate-400'>
                            Số lượng khách
                        </div>
                        <div className='flex items-center justify-between border border-slate-200 p-1 rounded-md gap-2'>
                            <div className={`text-[24px] ${adult > 1 ? 'text-primary' : 'text-slate-400'} select-none`}
                                onClick={()=>handleSetCountAdult('minus')}
                            >
                                <AiOutlineMinusCircle/>
                            </div>
                            <div className='text-primary'>
                                {adult} người lớn
                            </div>
                            <div className={`text-[24px] ${adult < 4 ? 'text-primary' : 'text-slate-400'} select-none`}
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
                        <div className='flex items-center justify-between border border-slate-200 p-1 rounded-md gap-2'>
                            <div className={`text-[24px] ${child > 1 ? 'text-primary' : 'text-slate-400'} cursor-pointer`}
                                onClick={()=>handleSetCountChild('minus')}
                            >
                                <AiOutlineMinusCircle/>
                            </div>
                            <div className='text-primary'>
                                {child} trẻ em
                            </div>
                            <div className={`text-[24px] ${child < 3 ? 'text-primary' : 'text-slate-400'} cursor-pointer`}
                                onClick={()=>handleSetCountChild('plus')}
                            >
                                <AiOutlinePlusCircle/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-end'>
                <div className='px-4 py-2 rounded-md cursor-pointer hover:bg-primary/75 select-none bg-primary text-white uppercase'
                    onClick={handleSubmit}
                >
                    áp dụng
                </div>
            </div>
        </div>
    );
}

export default memo(ClientOption);