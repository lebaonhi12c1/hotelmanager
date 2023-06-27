'use client'

import React from 'react';

import Image from 'next/image'
import { memo } from 'react';
import ServiceRoom from './ServiceRoom';
import hotelogo from '@/public/images/hotelicon.svg'
import { uid } from 'uid';
function CardRoomBooking(props) {
    return (
        <div className='rounded-lg bg-white shadow-sm'>
            <div className='flex gap-4 p-4 items-center '>
                <div className='relative w-[20px] h-[20px]'>
                    <Image
                        src={hotelogo}
                        fill
                        className='w-full h-full object-cover'
                        loading='lazy'
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
            <div className='p-4 bg-slate-200'>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày nhận phòng:
                    </div>
                    <div className=' font-semibold'>
                        date
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày trả phòng:
                    </div>
                    <div className=' font-semibold'>
                        date
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <div className=' font-semibold'>title</div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            khách/phòng
                        </div>
                        <div>
                            value
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            kiểu giường
                        </div>
                        <div>
                            value
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='relative w-[80px] h-[60px]'>
                        <Image
                            src={'https://img.freepik.com/free-photo/yellow-living-room-interior-with-free-space_43614-934.jpg?w=900&t=st=1687875896~exp=1687876496~hmac=2edf299d279c4de19ba04701f1f09b83945f926b446f291de5ab1963ec26d4fd'}
                            fill
                            loading='lazy'
                            alt='room-image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        {[ 'wifi', 'no-smoking'].map(item =>
                        {
                            return (
                                <ServiceRoom
                                    value={item}
                                    key={uid(10)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(CardRoomBooking);