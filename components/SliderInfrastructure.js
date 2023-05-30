'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { memo } from 'react';
import {AiOutlineWifi, AiFillCar} from 'react-icons/ai'
import {BiStopwatch} from 'react-icons/bi'
import {Ri24HoursFill,RiTvLine} from 'react-icons/ri'
import {GiElevator,GiKitchenKnives} from 'react-icons/gi'
import {BsBag} from 'react-icons/bs'
import { uid } from 'uid';
import CardSliderInfrastructure from './CardSliderInfrastructure';
import { useReponsive } from '@/hooks';
function SliderInfrastructure(props) {
    const reponesive = useReponsive()
    const data = [
        {
            icon: AiOutlineWifi,
            name: 'Wifi'
        },
        {
            icon: AiFillCar,
            name: 'Bãi đỗ xe', 
        },
        {
            icon: BsBag,
            name: 'Giữ Hành lý', 
        },
        {
            icon: Ri24HoursFill,
            name: 'Dịch vụ 24 giờ', 
        },
        {
            icon: RiTvLine,
            name: 'TV', 
        },
        {
            icon: GiElevator,
            name: 'Thang máy', 
        },
        {
            icon: GiKitchenKnives,
            name: 'Tiện nghi nhà bếp', 
        },
        {
            icon: BiStopwatch,
            name: 'Nhận phòng / trả phòng', 
        },
    ]
    return (
        <div className='bg-slate-300 p-4 flex flex-col gap-10'>
            <div className=' font-bold'>Những tiện nghi phổ biến nhất</div>
            <div>
                <Swiper
                    modules={[Navigation,Autoplay]}
                    navigation
                    autoplay={
                        {
                            delay: 1500
                        }
                    }
                    spaceBetween={12}
                    slidesPerView={reponesive ? 4 : 6}
                >
                    {data.map(item=>
                    (
                        <SwiperSlide key={uid(10)}>
                            <CardSliderInfrastructure
                                Icon={item.icon} 
                                name = {item.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default memo(SliderInfrastructure);