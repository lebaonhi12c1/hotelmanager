'use client'

import Evalute from '@/components/Evalute';
import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import RoomsListDetail from '@/components/RoomsListDetail';
import { get_data } from '@/hooks/api';
import React from 'react';
import useSWR from 'swr'

function Category({params}) {
    const {data} = useSWR(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/room-type/${params.categoryid}`, get_data)
    return (
        <div className='root-container flex flex-col gap-4'>
           <div className='bg-white py-4'>
                <div className='px-4 text-[24px] font-semibold'>
                    Loại phòng : {data?.name || 'Loading...'}
                </div>
                <div>
                    <RoomsListDetail rooms={data?.rooms}/>
                </div>
           </div>
           <Infrastructure/>
           <Position/>
           <Evalute/>
        </div>
    );
}

export default Category;