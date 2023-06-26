'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '@/data';
import Image from 'next/image';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import { uid } from 'uid';
function SliderMobile({height = 250}) {
    return (
        <div className='w-full'>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
            >
                {images.map(item=>
                    (
                        <SwiperSlide key={uid(10)}>
                            <div className='relative' style={{height: height + 'px'}}>
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
    );
}

export default SliderMobile;