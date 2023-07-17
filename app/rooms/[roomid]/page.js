'use client'

import ServiceRoom from '@/components/ServiceRoom';
import Image from 'next/image';
import React, { useContext } from 'react';
import { getFormatPrice, useReponsive } from '@/hooks';
import { Tooltip } from 'react-tooltip';

import SliderMobile from '@/components/SliderMobile';
import SliderRoom from '@/components/SliderRoom';
import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import Evalute from '@/components/Evalute';
import Link from 'next/link';
import useSWR from 'swr'
import { uid } from 'uid';
import { get_data } from '@/hooks/api';
import ListRoomOfRoomType from '@/components/ListRoomOfRoomType';
import { filterContext } from '@/context/filter';
import LoadingItem from '@/components/LoadingItem';

function RoomDetail({params}) {

    const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/room-type/${params.roomid}`, get_data)
    const { filter } = useContext(filterContext)
    const reponsive = useReponsive()
    const value = 
    {
        images: 
        [
            
        ],
        bed_type: 'one-two-people',
        the_number_of_guests: 2,
        size: 25,
        title: 'Room title',
        utilities:
        [
            'wifi',
            'no-smoking',
            'no-breakfast',
            'unrefund',
            'no-schedule-change',
            'air-conditioner',
            'hot-water',
            'voucher',
        ],
        price: 1056000560,
        old_price: 234005405,
        
    }
    return (
        <div className='flex flex-col gap-4 center-mobile-element'>
            <div className='root-container bg-white flex flex-col gap-4 p-4'>
                {
                    isLoading ?
                    (
                        <div
                            className='text-center w-full flex justify-center'
                        > 
                            <LoadingItem/>
                        </div>
                    ) :
                    (
                        <div
                            className='flex flex-col gap-4'
                        >
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <div className='relative overflow-hidden'>
                                    <SliderMobile 
                                        height={
                                            reponsive ? 250 : 400
                                        }
                                        data={data?.image}
                                    />
                                </div>
                                <div className='flex flex-col gap-4 p-4'>
                                    <div className='lg:text-[24px] font-semibold'>
                                        {data?.name || 'Loading...'}
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <ServiceRoom value={value.bed_type}/>
                                        <div>
                                            {data?.capacity || 'Loading...'} khách
                                        </div>
                                    </div>
                                    <div
                                        className='grid grid-cols-2 gap-4'
                                    >
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                Phòng
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                {data?.utilities_room?.map(item =>
                                                    (
                                                        <ServiceRoom value={item} key={uid(10)}/>
                                                    )) ||
                                                    'Loading...'
                                                }
                                            </div>
                                        </div>
                                        <div 
                                            className='flex flex-col gap-2'
                                        >
                                            <div>
                                                Phòng tắm
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                {data?.utilities_bath_room?.map(item =>
                                                    (
                                                        <ServiceRoom value={item} key={uid(10)}/>
                                                    )) || 
                                                    'Loading...'
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex lg:items-start items-center flex-col gap-2'>
                                        {/* <div className='line-through text-slate-400 '>
                                            {getFormatPrice(value.old_price)}
                                        </div> */}
                                        <div className=' flex flex-col lg:flex-row items-center gap-4'>
                                            <div
                                                className='text-slate-500'
                                            >
                                                Giá khởi điểm:
                                            </div>
                                        <div className='text-[24px] text-red-color font-bold'> 
                                                {getFormatPrice(data?.priceBegin) || 'Loading...'}
                                            </div>
                                        </div>
                                        <div className='text-slate-400 '>
                                            / phòng / đêm
                                        </div>
            
                                        <Link
                                            href={`/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }`}
                                        >
                                            <div className="inline-flex items-center justify-center px-8 py-2 font-sans font-semibold tracking-wide text-white bg-red-color rounded-lg h-fit hover:shadow-lg hover:shadow-red-color/70 duration-150 hover:scale-105 active:scale-95 select-none"
                                            >
                                                Đặt ngay
                                            </div>
                                        </Link>
                                        <div className='text-primary tooltip cursor-pointer font-bold hidden lg:block'>
                                            Giá cuối cùng
                                            <Tooltip
                                                place='top'
                                                variant='dark'
                                                anchorSelect='.tooltip'
                                                className=' z-50'
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
                                                            {getFormatPrice(data?.price) || 'Loading...'}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col border-b'>
                                                        <div className='flex items-center justify-between py-2'>
                                                            <div>
                                                                Giá phòng
                                                            </div>
                                                            <div>
                                                                {getFormatPrice(data?.price) || 'Loading...'}
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between py-2'>
                                                            <div>
                                                                Thuế và phí
                                                            </div>
                                                            <div>
                                                                {/* {getFormatPrice(data?.price) || 'Loading...'} */} 0 VND
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between border-b py-2'>
                                                        <div>
                                                            Tổng giá tiền
                                                        </div>
                                                        <div>
                                                            {getFormatPrice(data?.price) || 'Loading...'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ListRoomOfRoomType
                                value = {
                                    data?.rooms
                                }
                            />
                        </div>
                    )
                }
                <SliderRoom/>
            </div>
            <div className='root-container flex flex-col gap-4'>
                <Infrastructure/>
                <Position/>
                <Evalute/>
            </div>
        </div>
    );
}

export default RoomDetail;