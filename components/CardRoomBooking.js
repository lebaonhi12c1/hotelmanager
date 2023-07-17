'use client'

import React, { useContext } from 'react';

import { memo } from 'react';
import hotelogo from '@/public/images/hotelicon.svg'
import { cartContext } from '@/context/cart';
import { getFormatPrice } from '@/hooks';
import ImageConainer from './ImageConainer';
import CardInfoRoomPayment from './CardInfoRoomPayment';
function CardRoomBooking(props) {
    const { item_payment, total_services, services} = useContext( cartContext )
    return (
        <div className='rounded-lg bg-white shadow-sm'>
            <div className='flex gap-4 p-4 items-center '>
                <div className='relative w-[20px] h-[20px]'>
                    <ImageConainer
                        value = { hotelogo }
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className=' font-semibold'>
                        Vinholidays Fiesta Phu Quoc
                    </div>
                    <div className=' text-[14px]'>
                        Vinholidays Fiesta Phu Quoc
                    </div>
                </div>
            </div>
            <CardInfoRoomPayment/>
            <div
                className='flex flex-col gap-2'
            >
                <div className="flex items-baseline gap-2 pl-4 ">
                    <div>
                        Phòng
                    </div>
                    <div
                        className='text-red-color'
                    >
                        {
                            getFormatPrice( item_payment.price )
                        }
                    </div>
                </div>
                {
                    services.map(
                        (item, index) =>
                        {
                            return (
                                <div className="flex items-baseline gap-2 pl-4 "
                                    key={ index }
                                >
                                    <div>
                                        {
                                            item.name
                                        }
                                    </div>
                                    <div
                                        className='text-red-color'
                                    >
                                        {
                                            getFormatPrice( item.amount )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div
                className='flex items-center gap-2 p-3'
            >
                <span>
                    Thành tiền:
                </span>
                <span
                    className = 'text-red-color font-medium'
                >
                    { getFormatPrice( item_payment?.price + total_services ) }
                </span>
            </div>
        </div>
    );
}
export default memo(CardRoomBooking);