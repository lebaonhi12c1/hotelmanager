'use client'

import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import React from 'react';
import RoomsListDetail from '@/components/RoomsListDetail';
import Evalute from '@/components/Evalute';
import useSWR from 'swr'
import { FILTER_ROOMS } from '@/api_variables';
import { get_data } from '@/hooks/api';

function RoomDetail({searchParams}) {

    const {data} = useSWR(FILTER_ROOMS + `?room=${searchParams.query}`,get_data)
    return (
        <div className='root-container'>
            <div className='flex gap-4 flex-col center-mobile-element'>
                <RoomsListDetail
                    data={data}
                />
                <Infrastructure/>
                <Position/>
                <Evalute/>
            </div>
        </div>
    );
}

export default RoomDetail;