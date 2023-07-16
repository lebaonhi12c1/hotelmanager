'use client'

import Image from 'next/image';
import React from 'react';
import {GrClose} from 'react-icons/gr'
import {motion} from 'framer-motion'
function ModalDetailRoom({isOpen}) {
    return (
        isOpen &&
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
                    <Image
                        src={room.image}
                        fill
                        loading='lazy'
                        alt='room-img'
                        className='object-cover'
                    />
                </div>
                <div className='absolute bg-white text-[24px] rounded-full p-2 top-4 right-4 cursor-pointer'
                >
                    <GrClose/>
                </div>
            </div>
            <div className='lg:col-span-2 bg-white overflow-y-auto'>
                <div className='text-[24px] p-4'>
                    {room.title}
                </div>
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-bold'>
                            Tiện nghi phòng
                        </div>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-bold'>
                            Thông tin chung
                        </div>

                    </div>
                    <div className='border-t border-black'></div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[18px] font-bold'>
                            Phòng tắm
                        </div>
                    </div>
                </div>
                <div className='p-4 rounded-sm bg-primary text-white flex items-center justify-center uppercase hover:shadow-lg hover:shadow-primary/70 duration-150 cursor-pointer'>
                    Đặt ngay
                </div>
            </div>
        </motion.div>
    );
}

export default ModalDetailRoom;