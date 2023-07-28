'use client'

import React from 'react';
import { images } from '@/data';
import Image from 'next/image';
import {motion} from 'framer-motion'
import SwiperSliderModal from './SwiperSliderModal';
import { useState } from 'react';
function Slider(props) {
    const [isSwoper,setIsSwiper]= useState(false)
    const [initvalue,setInitvalue] =useState(0)
    const handleSwiperActive = value=>
    {
        setIsSwiper(true)
        setInitvalue(value)
    }
    return (
        <div className=' grid grid-cols-2 gap-2 h-[475px]'>
            <div className='relative'>
                <Image
                    src={images[0].value}
                    fill={true}
                    loading={'lazy'}
                    alt='room-image'
                    className='object-cover hover:brightness-50 cursor-pointer duration-150'
                    onClick={()=>handleSwiperActive(0)}
                />
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='relative'>
                    <Image
                        src={images[1].value}
                        fill={true}
                        loading={'lazy'}
                        alt='room-image'
                        className='object-cover hover:brightness-50 cursor-pointer duration-150'
                        onClick={()=>handleSwiperActive(1)}
                    />
                </div>
                <div className='relative'>
                    <Image
                        src={images[2].value}
                        fill={true}
                        loading={'lazy'}
                        alt='room-image'
                        className='object-cover hover:brightness-50 cursor-pointer duration-150'
                        onClick={()=>handleSwiperActive(2)}
                        
                    />
                </div>
                <div className='relative'>
                    <Image
                        src={images[3].value}
                        fill={true}
                        loading={'lazy'}
                        alt='room-image'
                        className='object-cover hover:brightness-50 cursor-pointer duration-150'
                        onClick={()=>handleSwiperActive(3)}
                    />
                </div>
                <div className='relative'>
                    <Image
                        src={images[4].value}
                        fill={true}
                        loading={'lazy'}
                        alt='room-image'
                        className='object-cover hover:brightness-50 cursor-pointer duration-150'
                    />
                    <motion.div className='absolute text-white inset-0 flex items-center justify-center bg-black/50 cursor-pointer'
                        onClick={()=>handleSwiperActive(4)}
                        initial={
                            {
                                opacity: 0
                            }
                        }
                        whileHover={
                            {
                                opacity: 1
                            }
                        }
                    >
                        +{images.length-5}
                    </motion.div>
                </div>
            </div>
            <SwiperSliderModal
                isOpen={isSwoper}
                handleClose={setIsSwiper}
                initvalue={initvalue}
            />
        </div>
    );
}

export default Slider;