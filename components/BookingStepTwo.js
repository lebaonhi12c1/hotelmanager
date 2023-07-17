'use client'

import { cartContext } from '@/context/cart';
import { getFormatPrice } from '@/hooks';
import { get_data } from '@/hooks/api';
import { getToastError } from '@/hooks/toast';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { uid } from 'uid';

function BookingStepTwo({handle_set_step}) {
    const [info, set_info] = useState(null)
    const { item_payment } = useContext( cartContext )
    useEffect(() =>
    {
        set_info(JSON.parse(localStorage.getItem('payment')))
    },[])


    const handle_submit = async() =>
    {
        const check =
        {
            startDate: item_payment.startDate,
            endDate: item_payment.endDate,
            id: item_payment.id
        }
        const res = await get_data(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/filter/room/available?${new URLSearchParams(check)}`)
        if(res == true)
        {
            handle_set_step(3)
            return
        }
        getToastError( 'Phòng này vừa có người đặt trước bạn')
        return
    }
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
            <div className='p-4 bg-white rounded-lg flex flex-col gap-10'>
                <div className='text-[24px] font-semibold'>
                    Xem lại thông tin đặt phòng
                </div>
                <div className='flex flex-col gap-4 bg-slate-100 rounded-lg p-4'>
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
                        <div className='flex items-center gap-4'>
                            {
                                info?.services?.map(
                                    ( item, index ) =>
                                    {
                                        return (
                                            <div 
                                                className="flex items-center gap-2"
                                                key={ index }
                                            >
                                                <div>
                                                    {
                                                        item.name
                                                    }:
                                                </div>
                                                <div
                                                    className='text-red-color '
                                                >
                                                    {
                                                        getFormatPrice(  item.amount )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className=' font-semibold min-w-[150px]'>
                            Thành tiền:
                        </div>
                        <div className='text-red-color font-medium'>
                            {getFormatPrice( info?.total ) || 'Loading...'}
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
                    onClick={
                        handle_submit
                    }
                >
                    Tiếp tục
                </div>
            </div>
        </div>
    );
}

export default BookingStepTwo;