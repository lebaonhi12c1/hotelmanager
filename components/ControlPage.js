'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { memo } from 'react';
function ControlPage(props) {
    const [index,setIndex] = useState('overview')
    return (
        <div className='hidden items-center gap-4 lg:flex justify-center'>
            <Link href={'#overview'}
                className={`${index==='overview' && 'text-primary border-b border-primary py-2'}`}
                onClick={()=>setIndex('overview')}
            >
                Tổng quát
            </Link> 
            <Link href={'#infrastructure'}
                className={`${index==='nfrastructure' && 'text-primary border-b border-primary py-2'}`}
                onClick={()=>setIndex('nfrastructure')}
            >
                Cơ sở vật chất
            </Link> 
            <Link href={'#room'}
                className={`${index==='room' && 'text-primary border-b border-primary py-2'}`}
                onClick={()=>setIndex('room')}
            >
                Phòng
            </Link> 
            <Link href={'#position'}
                className={`${index==='position' && 'text-primary border-b border-primary py-2'}`}
                onClick={()=>setIndex('position')}
            >
                Vị trí
            </Link> 
            <Link href={'#evalute'}
                className={`${index==='evalue' && 'text-primary border-b border-primary py-2'}`}
                onClick={()=>setIndex('evalue')}
            >
                Đánh giá của khách
            </Link> 
        </div>
    );
}

export default memo(ControlPage);