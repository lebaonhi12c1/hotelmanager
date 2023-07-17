'use client'

import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import React from 'react';
import RoomsListDetail from '@/components/RoomsListDetail';
import Evalute from '@/components/Evalute';
import useSWR from 'swr'
import { FILTER_ROOMS } from '@/api_variables';
import { get_data } from '@/hooks/api';
import { check_empty } from '@/hooks';
import AcceptPrice from '@/components/AcceptPrice';
import LoadingItem from '@/components/LoadingItem';

function RoomDetail({searchParams}) {

    console.log(searchParams)
    // /rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString()
    const {data, isLoading} = useSWR(FILTER_ROOMS + `?${ new URLSearchParams( {...searchParams, child: JSON.stringify( searchParams.child ) } ).toString() }`,get_data)
    return (
        <div className='root-container'>
            <div className='flex gap-4 flex-col center-mobile-element'>
                <div
                    className='bg-white p-4 rounded-lg hidden lg:block'
                >
                    <AcceptPrice
                        button_title = { 'Tìm kiếm' }
                    />
                </div>
                {
                    isLoading ?
                    (
                        <div 
                            className='bg-white rounded-lg flex items-center justify-center p-4'
                        >
                            <LoadingItem/>
                        </div>
                    ) :
                    (

                        check_empty(data) ?
                        (
                            <div className=" bg-white text-[24px] p-4 rounded-lg text-red-color italic text-center">
                                Rất tiếc, Không tìm được phòng phù hợp với tìm tiếm của bạn
                            </div>
                        ) :
                        (
                            <RoomsListDetail
                                data={data}
                            />
                        )
                    )
                }
                <Infrastructure/>
                <Position/>
                <Evalute/>
            </div>
        </div>
    );
}

export default RoomDetail;