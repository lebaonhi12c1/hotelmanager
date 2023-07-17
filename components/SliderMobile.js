'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '@/data';
import Image from 'next/image';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import { uid } from 'uid';
import ImageConainer from './ImageConainer';
function SliderMobile({height = 250, data = images}) {
    return (
        <div className='w-full'>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
            >
                {data.map(item=>
                        (
                            <SwiperSlide key={uid(10)}>
                                <div className='relative' style={{height: height + 'px'}}>
                                    <ImageConainer
                                        value = { item.value }
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    ) ||
                    'Loading...'
                }
            </Swiper>
        </div>
    );
}

export default SliderMobile;