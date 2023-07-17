

import React from 'react';
import CardRoomHome from './CardRoomHome';
import { uid } from 'uid';
import useSWR from 'swr'
import { get_data } from '@/hooks/api';
import LoadingItem from './LoadingItem';
function Rooms(props) {

    const {data, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/room-type?status=published`, get_data)
    return (
        <div className='flex flex-col' id='room'>
            <div className='text-[24px] font-bold bg-white p-4 border-b '>
                Tham khảo thông tin về phòng
            </div>
            <div className='flex flex-col gap-4'>
                {
                    isLoading ?
                    (
                       <div className=" flex justify-center py-4">
                            <LoadingItem/>
                       </div>
                    ):
                    (
                        data.map(item=>
                        {
                            return (
                                <div className="" key={uid(10)}>
                                    <CardRoomHome value={item}/>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    );
}

export default Rooms;