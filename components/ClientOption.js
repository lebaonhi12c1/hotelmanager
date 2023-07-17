'use client'

import { filterContext } from '@/context/filter';
import React, { useContext } from 'react';
import { memo } from 'react';
import { useState } from 'react';
import { AiOutlineMinusCircle,AiOutlinePlusCircle, AiOutlineDown } from 'react-icons/ai'
function ClientOption({isOpen,handleClose}) {
    const { filter, setFilter } = useContext(filterContext)
    const [adult,setAdult] = useState(2)
    const [child,setChild] = useState([])
    const [ number_child_option, set_number_child_option ] = useState( null )
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
                child.length < 3 && setChild( [...child, { old: 8 } ] )
                break
            case 'minus':
                child.length > 0 && setChild( child.filter( ( item, index ) => index < child.length - 1 ))
                break
            default:
                break
        }
    }
    const handleSubmit = () =>
    {
        setFilter({
            ...filter,
            adult:adult,
            child:child
        })
        handleClose(false)
    }

    const handle_update_value_child = value =>
    {
        set_number_child_option( null )
        setChild(
            child.map(
                ( item, index ) => index === value.index ? value.value : item
            )
        )
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
                            <div className={`text-[24px] ${child.length > 0 ? 'text-primary' : 'text-slate-400'} cursor-pointer`}
                                onClick={()=>handleSetCountChild('minus')}
                            >
                                <AiOutlineMinusCircle/>
                            </div>
                            <div className='text-primary'>
                                {child.length} trẻ em
                            </div>
                            <div className={`text-[24px] ${child.length < 3 ? 'text-primary' : 'text-slate-400'} cursor-pointer`}
                                onClick={()=>handleSetCountChild('plus')}
                            >
                                <AiOutlinePlusCircle/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='flex items-center gap-4'
                >
                    {
                        child.map(
                            ( item, index ) =>
                            {
                                return (
                                    <div
                                      aria-label="dropdown"
                                      className="relative w-[340px] text-sm font-medium text-black"
                                      key={ index }
                                    >
                                      <div className="flex items-center justify-between w-full p-1 border border-blue-500 rounded cursor-pointer"
                                            onClick={
                                               () => set_number_child_option( index )
                                            }
                                      >
                                        <span className="pointer-events-none">
                                            {
                                                item.old + ' '
                                            }
                                            tuổi
                                        </span>
                                        <span className="pointer-events-none">
                                            <AiOutlineDown/>
                                        </span>
                                      </div>
                                      {
                                        number_child_option == index && 
                                        (
                                            <div className="absolute left-0 w-full p-2 mt-2 bg-white rounded-lg shadow top-full h-[300px] overflow-auto">
                                                {Array(9)
                                                .fill(0)
                                                .map((item, index_child) => (
                                                    <div
                                                        className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
                                                        key={index_child}
                                                        onClick={
                                                            () => handle_update_value_child( { index, value: { old: index_child + 3 } } )
                                                        }
                                                    >
                                                        {index_child + 3}
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                      }
                                    </div>
                                )
                            }
                        )
                    }
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
