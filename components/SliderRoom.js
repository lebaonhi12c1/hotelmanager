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
function SliderRoom({
    heading = 'Phòng được đặt nhiều nhất',
    data = 
    [
        {
            image: "https://img.freepik.com/premium-photo/minimalist-interior-bedroom_33739-523.jpg?w=1060",
            title: "Suite",
            max: 2,
            option: "Giường đơn hoặc giường đôi",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg?w=996&t=st=1685626938~exp=1685627538~hmac=7ec7ed09a1b91b5fb08099506fad84f97fae292f8f3b15eb8a9b1c635d99045b",
            title: "Phòng Tiêu Chuẩn Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
    ]
}) 
{
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