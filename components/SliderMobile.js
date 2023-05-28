'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '@/data';
import Image from 'next/image';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
function SliderMobile(props) {
    return (
        <div className='w-full'>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
            >
                {images.map(item=>
                    (
                        <SwiperSlide>
                            <div className='relative h-[250px]'>
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