

import React from 'react';
import CardRoomHome from './CardRoomHome';
import { uid } from 'uid';

function Rooms(props) {
    const data = [
        {
            image: 'https://img.freepik.com/premium-photo/minimalist-interior-bedroom_33739-523.jpg?w=1060',
            title: 'Suite',
            max: 2,
            option: 'Giường đơn hoặc giường đôi',
            services:
            [
                'Nhìn tả cảnh quan',
                'Vòi sen',
                'Hồ bơi riêng',
                'Điều hòa nhiệt độ'
            ]
        },
        {
            image: 'https://img.freepik.com/free-photo/small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg?w=996&t=st=1685626938~exp=1685627538~hmac=7ec7ed09a1b91b5fb08099506fad84f97fae292f8f3b15eb8a9b1c635d99045b',
            title: 'Phòng Tiêu Chuẩn Giường Đôi',
            max: 2,
            option: 'none',
            services:
            [
                'Nhìn tả cảnh quan',
                'Vòi sen',
                'Hồ bơi riêng',
                'Điều hòa nhiệt độ'
            ]
        },
        {
            image: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2',
            title: 'Phòng Superior Giường Đôi',
            max: 2,
            option: 'none',
            services:
            [
                'Nhìn tả cảnh quan',
                'Vòi sen',
                'Hồ bơi riêng',
                'Điều hòa nhiệt độ'
            ]
        },
    ]
    return (
        <div className='flex flex-col' id='room'>
            <div className='text-[24px] font-bold bg-white p-4 border-b '>
                Phòng và tình trạng phòng trống
            </div>
            <div className='flex flex-col gap-4'>
                {data.map(item=>
                {
                    return (
                        <div className="" key={uid(10)}>
                            <CardRoomHome value={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Rooms;