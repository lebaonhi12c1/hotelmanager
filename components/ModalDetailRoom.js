'use client'

import Image from 'next/image';
import React, { useContext } from 'react';
import {GrClose} from 'react-icons/gr'
import {motion} from 'framer-motion'
import { roomContext } from '@/context/room';
import { check_empty } from '@/hooks';
import { filterContext } from '@/context/filter';
import { useRouter } from 'next/navigation';
import { services_bath_rooms, services_rooms } from '@/data';
import SliderMobile from './SliderMobile';
import { uid } from 'uid';
function ModalDetailRoom() {
    const { room, set_room_info } = useContext( roomContext )
    const { filter } = useContext( filterContext )
    const router = useRouter()
    const handle_fitler_room = () =>
    {
        set_room_info( null )
        router.push( `/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }`)
    }

    return (
        !check_empty( room ) &&
        <motion.div className='fixed inset-0 grid grid-cols-1 lg:grid-cols-5 bg-black z-[70]'
            initial = {
                {
                    opacity: 0
                }
            }
            animate = {
                {
                    opacity: 1
                }
            }
        >
            <div className='lg:col-span-3 bg-black flex items-center justify-center relative'>
                <div className='relative lg:w-[90%] lg:h-[500px] h-[200px] w-full'>
                    {/* <Image
                        src={room?.ImageRoomTypes[0]?.value}
                        fill
                        loading='lazy'
                        alt='room-img'
                        className='object-cover'
                    /> */}
                    <SliderMobile
                        data={ room?.ImageRoomTypes }
                        height={ 500 }
                    />
                </div>
                <div className='absolute bg-white text-[24px] rounded-full p-2 top-4 right-4 cursor-pointer'
                    onClick={ () => set_room_info( null ) }
                >
                    <GrClose/>
                </div>
            </div>
            <div className='lg:col-span-2 bg-white overflow-y-auto'>
                <div className='text-[24px] p-4 font-medium'>
                    {room?.name}
                </div>
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-medium'>
                            Số lượng khách
                        </div>
                        <div>
                            {
                                room?.capacity
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-medium'>
                            Tiện nghi phòng
                        </div>
                        <div
                            className='flex flex-col gap-2'
                        >
                            {
                                services_rooms?.map(
                                    item =>
                                    (
                                        <div className=" text-red-color italic font-medium"
                                            key={ uid( 10 ) }
                                        >
                                            {
                                                item
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-medium'>
                            Thông tin chung
                        </div>
                        <div
                            className='text-slate-500 italic'
                        >
                            Đang cập nhật
                        </div>
                    </div>
                    <div className='border-t border-black'></div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-bold'>
                            Phòng tắm
                        </div>
                        <div
                            className='flex flex-col gap-2'
                        >
                            {
                                services_bath_rooms?.map(
                                    item =>
                                    (
                                        <div className=" text-primary italic font-medium">
                                            {
                                                item
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='p-4 rounded-sm bg-primary text-white flex items-center justify-center uppercase hover:shadow-lg hover:shadow-primary/70 duration-150 cursor-pointer'
                    onClick={
                        handle_fitler_room
                    }
                >
                    Đặt ngay
                </div>
            </div>
        </motion.div>
    );
}

export default ModalDetailRoom;