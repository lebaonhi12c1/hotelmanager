'use client'

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { uid } from 'uid';

function BookingStepTwo({handle_set_step}) {
    const [info, set_info] = useState(null)
    useEffect(() =>
    {
        set_info(JSON.parse(localStorage.getItem('payment')))
    },[])
    const get_type_service = value =>
    {
        switch (value) {
            case 'floor':
                return 'Trên tần'
            case 'one':
                return 'Giường đơn'
            case 'two':
                return 'Giường đôi'
        
            default:
                break;
        }
    }
    return (
        <div className='flex flex-col gap-4'>
            {JSON.stringify(info)}
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
                            {info?.info?.username || 'Loading...'}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className=' font-semibold min-w-[150px]'>
                            Số điện thoại:
                        </div>
                        <div>
                            {info?.info?.phone || 'Loading...'}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className=' font-semibold min-w-[150px]'>
                            Email:
                        </div>
                        <div>
                            {info?.info?.email || 'Loading...'}
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className=' font-semibold min-w-[150px]'>
                            Các yêu cầu đặt biệt:
                        </div>
                        <div className='flex items-center gap-2'>
                            {info?.service_checkbox.map(item => 
                            (
                                <div className="" key={uid(10)}>{get_type_service(item)},</div>
                            )) ||
                                'Không có yêu cầu'
                            }
                            {get_type_service(info?.service_radio) || 'Không có yêu cầu'}
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className=' font-semibold min-w-[150px]'>
                            Giờ nhận phòng:
                        </div>
                        <div className='flex items-center gap-2'>
                            {info?.time.start_time || 'Không có yêu cầu'}
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className=' font-semibold min-w-[150px]'>
                            Giờ trả phòng:
                        </div>
                        <div className=''>
                            {info?.time.end_time || 'Không có yêu cầu'}
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className=' font-semibold min-w-[150px]'>
                            Thành tiền:
                        </div>
                        <div className='text-red-color'>
                            {info?.total || 'Loading...'}
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