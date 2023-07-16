'use client'

import React, { useContext } from 'react';

import Image from 'next/image'
import { memo } from 'react';
import hotelogo from '@/public/images/hotelicon.svg'
import { cartContext } from '@/context/cart';
import ListInfoRoomPayment from './ListInfoRoomPayment';
import { getFormatPrice } from '@/hooks';
import ImageConainer from './ImageConainer';
function CardRoomBooking(props) {
    const { total } = useContext( cartContext )
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
            <ListInfoRoomPayment/>
            <div
                className='flex items-center gap-2 p-3'
            >
                <span>
                    Thành tiền:
                </span>
                <span
                    className = 'text-red-color font-medium'
                >
                    { getFormatPrice( total ) }
                </span>
            </div>
        </div>
    );
}
export default memo(CardRoomBooking);