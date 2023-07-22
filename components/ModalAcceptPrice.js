import React, { useContext } from 'react';
import {GrClose} from 'react-icons/gr'
import SearchRoom from './SearchRoom';
import { filterContext } from '@/context/filter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getToastError } from '@/hooks/toast';
function ModalAcceptPrice({isOpen,handleClose}) {
    const { filter, setFilter } = useContext( filterContext )
    const router = useRouter()
    const handel_filter_room = () =>
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
        router.push( `/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }` )
        handleClose( false )
    }
    return (
        isOpen && 
        <div className='fixed inset-0 flex flex-col gap-4 z-[70] bg-white'>
            <div className='border-b py-2 border-slate-400'>
                <div className='root-container flex items-center justify-between'>
                    <div className=' font-bold'>
                        Kiểm tra phòng vào giá cả
                    </div>
                    <div className='text-[24px]'
                        onClick={()=>handleClose(false)}
                    >
                        <GrClose/>
                    </div>
                </div>
            </div>
            <div className="root-container flex flex-col gap-4">
                <div className='flex items-center justify-center gap-4 w-full'>
                    <div className='flex flex-col gap-2 border border-slate-400 rounded-md p-1 w-[40%]'>
                        <div className='text-[12px] text-slate-400'>Nhận phòng</div>
                        <input 
                            type="date"  
                            className='w-full'
                            value={filter.startDate}
                            onChange={
                                e => setFilter(
                                    {
                                        ...filter,
                                        startDate: e.target.value
                                    }
                                )
                            }    
                        />
                    </div>
                    <div className='flex flex-col gap-2 border border-slate-400 rounded-md p-1 w-[40%]'>
                        <div className='text-[12px] text-slate-400'>Trả phòng</div>
                        <input 
                            type="date"  
                            className='w-full'
                            value={filter.endDate}
                            onChange={
                                e => setFilter(
                                    {
                                        ...filter,
                                        endDate: e.target.value
                                    }
                                )
                            }    
                        />
                    </div>
                </div>
                <div>
                    <SearchRoom value={{number: 1}}/>
                </div>
            </div>
            <div className='mt-auto'>
                <div 
                    onClick={
                        handel_filter_room
                    }
                >
                    <div className='text-center p-4 text-white uppercase bg-primary rounded-sm active:scale-95'>
                        Nhận giá
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAcceptPrice;