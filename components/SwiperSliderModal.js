'use client'

import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '@/data';
import { Navigation,Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { uid } from 'uid';
import {VscChromeClose} from 'react-icons/vsc'
import { useState } from 'react';
function SwiperSliderModal({initvalue,isOpen,handleClose}) {
    const [acitve,setActive] = useState(initvalue)
    console.log(acitve)
    return (
        isOpen && 
        <div className='fixed inset-0 bg-black/70 z-40 flex items-center flex-col justify-center gap-10'>
                <div className='w-[800px]'>
                    <Swiper
                        modules = {[Navigation]}
                        navigation
                        slidesPerView={1}
                        initialSlide={initvalue}
                        onSlideChange={e=>setActive(e.activeIndex)}
                    >
                        {images.map(item=>
                            {
                                return <SwiperSlide key={uid(10)}>
                                    <div className='relative h-[400px]'>
                                        <Image
                                            src={item}
                                            fill={true}
                                            loading='lazy'
                                            alt='room-img'
                                            className='object-cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            }
                        )}
                    </Swiper>
                </div>
                <div className='w-full'>
                    <Swiper
                        modules = {[Scrollbar]}
                        slidesPerView={10}
                        spaceBetween={20}
                        scrollbar={{ draggable: true }}
                        initialSlide={initvalue}
                        slide
                        onSlideChange={e=>setActive(e.activeIndex)}
                    >
                        
                        {images.map((item,index)=>
                            (
                                <SwiperSlide key={uid(10)}>
                                    <div className={ `relative h-[100px] ${acitve === index && 'border-[4px] border-green-500'}`}>
                                        <Image
                                            src={item}
                                            fill={true}
                                            loading='lazy'
                                            alt='room-img'
                                            className='object-cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
                <div className='absolute top-4 right-4 text-[40px] text-white cursor-pointer'
                    onClick={()=>handleClose(false)}
                >
                    <VscChromeClose/>
                </div>
        </div>
    );
}

export default memo(SwiperSliderModal);