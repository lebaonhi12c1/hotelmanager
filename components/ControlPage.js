'use client'

import Link from 'next/link';
import React from 'react';
import { memo } from 'react';
function ControlPage(props) {
    const getActive = value=>
    {
         
    }
    return (
        <div className='flex items-center gap-4'>
            <Link href={'/#overview'}
                className={`${getActive('overview') && 'text-primary border-b border-primary'}`}
            >
                Tổng quát
            </Link> 
            <Link href={'/#nfrastructure'}
                className={`${getActive('nfrastructure') && 'text-primary border-b border-primary'}`}
            >
                Cơ sở vật chất
            </Link> 
            <Link href={'/#room'}
                className={`${getActive('room') && 'text-primary border-b border-primary'}`}
            >
                Phòng
            </Link> 
            <Link href={'/#position'}
                className={`${getActive('position') && 'text-primary border-b border-primary'}`}
            >
                Vị trí
            </Link> 
            <Link href={'/#evalue'}
                className={`${getActive('evalue') && 'text-primary border-b border-primary'}`}
            >
                Dánh giá cảu khách
            </Link> 
        </div>
    );
}

export default memo(ControlPage);