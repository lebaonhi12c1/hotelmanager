'use client'

import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { uid } from 'uid';
import { Autoplay, Navigation } from 'swiper';
import { useReponsive } from '@/hooks';
import CardFeatrureRoom from './CardFeatrureRoom';
function SliderRoom({heading, data}) {
    const reponesive = useReponsive()
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-[24px] font-bold'>
                {heading}
            </div>
            <div className=''>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={reponesive ? 1 : 4}
                    navigation
                    spaceBetween={16}
                    autoplay={
                        {
                            delay: 2000
                        }
                    }
                >
                    {
                        data.map(item=>
                        (
                            <SwiperSlide key={uid(10)} className='py-4'>
                                <CardFeatrureRoom value={item}/>
                            </SwiperSlide>  
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default memo(SliderRoom);