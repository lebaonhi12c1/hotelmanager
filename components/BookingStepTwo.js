'use client'

import { paymentSelect } from '@/store/reducer/payment';
import React from 'react';
import { useSelector } from 'react-redux';

function BookingStepTwo({handle_set_step}) {

    const info = useSelector(paymentSelect)

    return (
        <div className='flex flex-col gap-4'>
            <div className='p-4 bg-white rounded-lg flex flex-col gap-10'>
                <div className='text-[24px] font-semibold'>
                    Xem lại thông tin đặt phòng
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center'>
                        <div className=' font-semibold min-w-[150px]'>
                            Tên khách hàng:
                        </div>
                        <div>
                            {info.username}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className=' font-semibold min-w-[150px]'>
                            Số điện thoại:
                        </div>
                        <div>
                            {info.phone}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className=' font-semibold min-w-[150px]'>
                            Email:
                        </div>
                        <div>
                            {info.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-4'>
                <div className='px-4 py-2 rounded-md bg-primary text-white hover:shadow-lg hover:shadow-primary/70 hover:scale-105 active:scale-95 duration-150 select-none'
                    onClick={() => handle_set_step(1)}
                >
                    Quay lại
                </div>
                <div className='px-4 py-2 rounded-md bg-red-color text-white hover:shadow-lg hover:shadow-red-color/70 hover:scale-105 active:scale-95 duration-150 select-none'
                    onClick={() => handle_set_step(3)}
                >
                    Tiếp tục
                </div>
            </div>
        </div>
    );
}

export default BookingStepTwo;