
'use client'


import React, { useContext } from 'react';
import { memo } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { uid } from 'uid';
import ServiceRoom from './ServiceRoom';
import ImageConainer from './ImageConainer';
import CardFilterRoomChild from './CardFilterRoomChild';
import {GrStatusPlaceholder} from 'react-icons/gr'
import { roomContext } from '@/context/room';
function CardFilterRoom({value}) {
    const { set_room_info } = useContext( roomContext )
    return (
        <div 
            className='p-4 bg-gray-300 flex flex-col gap-4 relative'
        >
            <div
                className='text-[20px] font-medium'
            >
                {value?.name}
            </div>
            <div
                className='grid grid-cols-1 lg:grid-cols-3 gap-y-4  lg:gap-4 '
            >
                <div
                    className='flex flex-col bg-white rounded-lg overflow-hidden h-fit'
                >
                    <div
                        className='flex flex-col gap-1'
                    >
                        <ImageConainer value= { value?.ImageRoomTypes[0]?.value } height={150}/>
                        <div
                            className='grid grid-cols-3 gap-1'
                        >
                            {
                                value?.ImageRoomTypes.map(item=>
                                (
                                    <ImageConainer value={ item.value } height={60} key={uid(10)}/>
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className='flex flex-col gap-4 p-4'
                    >
                        <div
                            className='flex items-center gap-2 text-primary'
                        >
                            <GrStatusPlaceholder />
                            <span>
                                {value?.area}m<sup>2</sup>
                            </span>
                        </div>
                        <div
                            className='flex items-center gap-4'
                        >
                            {
                                value?.utilities?.map(item =>
                                {
                                    return(
                                        <ServiceRoom
                                            value={item}
                                            key={uid(10)}
                                        />
                                    )
                                })
                            }
                        </div>
                        <button
                            className='bg-slate-100 rounded-lg text-primary py-2 text-center active:scale-95 hover:bg-primary hover:text-white'
                            onClick={
                                () => set_room_info( value )
                            }
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div
                    className=' col-span-2 flex flex-col gap-4 max-h-[600px] overflow-auto'
                >
                    {
                        value?.rooms.map(item =>
                        (
                            <CardFilterRoomChild
                                value={item}
                                key={uid(10)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(CardFilterRoom);