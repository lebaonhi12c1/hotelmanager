'use client'

import React from 'react';
import Router from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
function LoadingRouter(props) {
    const [loading_route, set_loading_route] = useState(false)
    useEffect(() =>
    {
        Router.events.on('routeChangeStart', () => set_loading_route(true))
        Router.events.on('routeChangeComplete', () => set_loading_route(false))
    },[])
    return (
        loading_route && 
        <div
            className='fixed inset-0 bg-black/20 flex items-center justify-center z-[70]'
        >
            <div
                className='border-[4px] border-white border-r-transparent animate-spin rounded-full w-[40px] h-[40px]'
            >
                
            </div>
        </div>
    );
}

export default memo(LoadingRouter);