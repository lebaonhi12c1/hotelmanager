import React from 'react';

function Rooms(props) {
    const data = [
        {
            title: 'Suite',
            
        },
        {
            title: 'Phòng Tiêu Chuẩn Giường Đôi',
            
        },
        {
            title: 'Phòng Superior Giường Đôi',
            
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className='text-[24px] font-bold'>
                Phòng và tình trạng phòng trống
            </div>
            <div className='flex flex-col gap-4'>
                
            </div>
        </div>
    );
}

export default Rooms;