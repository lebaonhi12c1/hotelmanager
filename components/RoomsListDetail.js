'use client'


import React from 'react';
import { memo } from 'react';
import { uid } from 'uid';
import CardFilterRoom from './CardFilterRoom';

const getRomsFilter  = async value =>
{
    const res = await fetch('')
    const data = await res.json()
    return data
}

async function RoomsListDetail() {
    
    // const rooms = await getRomsFilter('query')
    // bed type = ['one-two-people', 'two-one' ]

    const data = 
    [
        {
            images: 
            [
                
            ],
            bed_type: 'one-two-people',
            the_number_of_guests: 2,
            size: 25,
            title: 'Room title',
            utilities:
            [
                'wifi',
                'no-smoking',
                'no-breakfast',
                'unrefund',
                'no-schedule-change',
                'air-conditioner',
                'hot-water',
                'voucher',
            ],
            price: 1056000560,
            old_price: 234005405,
            
        },
        {
            images: 
            [
                
            ],
            bed_type: 'one-two-people',
            the_number_of_guests: 2,
            size: 25,
            title: 'Room title',
            utilities:
            [
                'wifi',
                'no-breakfast',// khong can dung lodash ne, => reactjs, nextjs ho tro viet jsx
                'unrefund',
                'no-schedule-change',
                'air-conditioner',
                'hot-water',
                'voucher',
            ],
            price: 1056000560,
            old_price: 234005405,
            
        },
    ]
    return (
        <div className='bg-white rounded-lg'>
            {data.map(item => 
            {
                return (
                    <div className="" key={uid(10)}>
                        <CardFilterRoom value={item}/>
                    </div>
                )
            })}
        </div>
    );
}

export default memo(RoomsListDetail);