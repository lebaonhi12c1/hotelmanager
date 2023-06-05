import React from 'react';
import {GrClose} from 'react-icons/gr'
import SearchRoom from './SearchRoom';
function ModalAcceptPrice({isOpen,handleClose}) {
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
                        <input type="date"  className='w-full'/>
                    </div>
                    <div className='flex flex-col gap-2 border border-slate-400 rounded-md p-1 w-[40%]'>
                        <div className='text-[12px] text-slate-400'>Trả phòng</div>
                        <input type="date"  className='w-full'/>
                    </div>
                </div>
                <div>
                    <SearchRoom value={{number: 1}}/>
                </div>
            </div>
            <div className='mt-auto'>
                <div className='text-center p-4 text-white uppercase bg-primary rounded-sm'>
                    thêm một phòng
                </div>
            </div>
        </div>
    );
}

export default ModalAcceptPrice;