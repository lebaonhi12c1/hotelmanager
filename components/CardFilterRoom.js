
'use client'


import React from 'react';
import { memo } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { uid } from 'uid';
import ServiceRoom from './ServiceRoom';
import ImageConainer from './ImageConainer';
import CardFilterRoomChild from './CardFilterRoomChild';
import {GrStatusPlaceholder} from 'react-icons/gr'
function CardFilterRoom({value}) {
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
                className='grid grid-cols-1 lg:grid-cols-3 gap-4 '
            >
                <div
                    className='flex flex-col bg-white rounded-lg overflow-hidden h-fit'
                >
                    <div
                        className='flex flex-col gap-1'
                    >
                        <ImageConainer value='https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1685190721~exp=1685191321~hmac=ed8db7ccf19278e907aebc1df04d434ec4c2092e37587514458a9f9645c6d894' height={150}/>
                        <div
                            className='flex items-center gap-1'
                        >
                            {
                                Array(3).fill().map(item=>
                                (
                                    <ImageConainer value='https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1685190721~exp=1685191321~hmac=ed8db7ccf19278e907aebc1df04d434ec4c2092e37587514458a9f9645c6d894' height={60} key={uid(10)}/>
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
                            className='bg-slate-100 rounded-lg text-primary py-2 text-center'
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div
                    className=' col-span-2 flex flex-col gap-4'
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