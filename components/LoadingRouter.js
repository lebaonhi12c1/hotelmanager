'use client'

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
function LoadingRouter(props) {
    // THU LAM HIEU UNG CHUYEN TRANG BANG FRAMER MOTION
    const [loading_route, set_loading_route] = useState(false)
    useEffect(() =>
    {
        const handle_beforeunload = () =>
        {
            set_loading_route(true)
        }
        const handle_load = () =>
        {
            set_loading_route(false)
        }
        window.addEventListener('beforeunload', handle_beforeunload);
        window.addEventListener('load', handle_load);

        return () => {
          window.removeEventListener('beforeunload', handle_beforeunload);
          window.removeEventListener('load', handle_load);
        };
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