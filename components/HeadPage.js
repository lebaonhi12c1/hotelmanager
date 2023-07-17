'use client'

import React, { useContext } from 'react';
import {AiFillStar} from 'react-icons/ai'
import { uid } from 'uid';
import AcceptPrice from './AcceptPrice';
import AcceptPriceMobile from './AcceptPriceMobile';
import Slider from './Slider';
import SliderMobile from './SliderMobile';
import ControlPage from './ControlPage';
import { ratingContext } from '@/context/rating_value';
function HeadPage(props) {
    const  rating  = useContext( ratingContext)
    return (
        <div>
            <div className='root-container'>
                <div className='flex flex-col gap-4 py-10'>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            {
                                Array(5).fill().map(item=>
                                {
                                    return <AiFillStar className='text-yellow-500' key={uid(10)}/> 
                                })
                            }
                        </div>
                        <div className='text-center font-bold text-[20px] lg:text-[32px] lg:font-thin'>
                            Khách Sạn QN- TP. Hồ Chí Minh
                        </div>
                        <div className='text-[14px] text-slate-400 lg:text-[12px]'>
                            THE NQ HOTEL
                        </div>
                        <div className='flex items-center gap-2 justify-center w-full'>
                            <div className='border-t w-full lg:w-[200px] border-slate-300'></div>
                            <div className='text-[14px] text-slate-400 whitespace-nowrap'>
                                TP. Hồ Chí Minh, Việt Nam
                            </div>
                            <div className='border-t w-full lg:w-[200px] border-slate-300'></div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-fit p-2 bg-green-400 text-white rounded-md rounded-br-none'>
                                {
                                    rating
                                }
                            </div>
                            <div className='text-green-400'>Rất tốt</div>
                        </div>
                    </div>
                    <AcceptPrice
                        button_title={
                            'Nhận giá'
                        }
                    />
                    <AcceptPriceMobile/>
                    <div className='lg:block hidden'>
                        <Slider/>
                     </div>
                    <div className='lg:hidden'> 
                        <SliderMobile/>
                   </div>
                   <ControlPage/>
                </div>
            </div>
        </div>
    );
}

export default HeadPage;