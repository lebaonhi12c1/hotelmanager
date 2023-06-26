
'use client'

import Image from 'next/image';
import React from 'react';
import { memo } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { getFormatPrice } from '@/hooks';
import {BsCoin} from 'react-icons/bs'
import Link from 'next/link';
import { uid } from 'uid';
import ServiceRoom from './ServiceRoom';
function CardFilterRoom({value}) {

    return (
        <div className='p-4 flex flex-col lg:flex-row gap-4'>
            <Link href={`/rooms/${value._id}`}>
                <div className='lg:w-[300px] lg:h-[250px] h-[150px] relative lg:flex-shrink-0 overflow-hidden'>
                    <Image
                        src={'https://img.freepik.com/free-photo/luxury-modern-apartment-with-comfortable-pillow-decor-generated-by-ai_188544-40143.jpg?w=1060&t=st=1687363138~exp=1687363738~hmac=2e1146afc1919bca2f09781ba8a8732d76d62b755bfcc006902c07cb7acdd813'}
                        alt='room-img'
                        loading='lazy'
                        fill
                        className='object-cover hover:scale-105 duration-150 hover:brightness-75'
                    />
                </div>
            </Link>
            <div className='flex flex-col gap-2 flex-1'>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-[18px]'>{value.title}</div>
                    <div className='flex items-center gap-4'>
                         <ServiceRoom value={value.bed_type}/>
                        <div className='flex items-center gap-2'>
                            {value.the_number_of_guests} khách
                        </div>
                    </div>
                </div>
                <div className='border-y pb-4 border-slate-300 flex flex-col lg:flex-row gap-4'>
                    <div className='flex h-fit flex-wrap gap-4 py-2'>
                        {value.utilities.map(item =>
                        (
                            <div className="" key={uid(10)}>
                                <ServiceRoom value={item}/>
                            </div>
                        ))}
                    </div>
                    <div className='flex lg:items-end items-center flex-col gap-2'>
                        <div className='line-through text-slate-400 '>
                            {getFormatPrice(value.old_price)}
                        </div>
                        <div className='text-[24px] text-red-color font-bold'>
                            {getFormatPrice(value.price)}
                        </div>
                        <div className='text-slate-400 '>
                            / phòng / đêm
                        </div>
                        <Link href={`/rooms/${value._id}`}>
                            <button className="inline-flex items-center justify-center px-8 py-2 font-sans font-semibold tracking-wide text-white bg-red-color rounded-lg h-fit"
    
                            >
                                Xem chi tiết
                            </button>
                        </Link>
                        <div className='text-primary tooltip cursor-pointer font-bold hidden lg:block'>
                            Giá cuối cùng
                            <Tooltip
                                place='top'
                                variant='dark'
                                anchorSelect='.tooltip'
                            >
                                <div
                                    className='flex flex-col gap-4'
                                >
                                    <div className=''>
                                        Gía phòng cho một đêm
                                    </div>
                                    <div className='flex items-center justify-between border-b py-2'>
                                        <div>
                                            Đêm 1
                                        </div>
                                        <div>
                                            {getFormatPrice(value.price)}
                                        </div>
                                    </div>
                                    <div className='flex flex-col border-b'>
                                        <div className='flex items-center justify-between py-2'>
                                            <div>
                                                Giá phòng
                                            </div>
                                            <div>
                                                {getFormatPrice(value.price)}
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between py-2'>
                                            <div>
                                                Thuế và phí
                                            </div>
                                            <div>
                                                {getFormatPrice(value.price)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-b py-2'>
                                        <div>
                                            Tổng giá tiền
                                        </div>
                                        <div>
                                            {getFormatPrice(value.price)}
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-green-500">
                    <BsCoin/>
                    <span>Tiết kiệm 10%</span>
                </div>
            </div>
        </div>
    );
}

export default memo(CardFilterRoom);