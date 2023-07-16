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

function RoomsListDetail({data}) {
    
    // const rooms = await getRomsFilter('query')
    // bed type = ['one-two-people', 'two-one' ]
    return (
        <div className='bg-white rounded-lg'>
            {data?.map(item => 
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