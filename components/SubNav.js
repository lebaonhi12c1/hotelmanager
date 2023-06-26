'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { memo } from 'react';
import { useState } from 'react';

function SubNav(props) {
    const [category_hover, set_category_hover] = useState(false)
    const route = usePathname()
    const getActive = value =>
    {
        return route.includes(value)
    }
    return (
        <div className='lg:flex items-center gap-10 root-container py-2 hidden justify-center'
            
        >
            <Link
                className={`${route == '/' && 'bg-primary text-white'} hover:bg-primary/70 py-1 px-4 duration-150 hover:text-white`} 
                href={'/'}
            >
                Trang chủ
            </Link>
            <div className={`relative cursor-pointer ${getActive('category') && 'bg-primary text-white'} py-1 px-4 hover:bg-primary/70 hover:text-white`}
                onMouseEnter={() => set_category_hover(true)}
                onMouseLeave={() => set_category_hover(false)}
            >
                Loại phòng
                {category_hover &&
                (
                    <div className='flex flex-col gap-2 absolute top-full left-0 bg-white p-4 w-[300px] shadow-lg shadow-slate-200 font-thin z-[60]'

                    >
                        <Link className=" italic text-slate-400 hover:text-primary"
                            href={`/category/1`}
                        >
                            Loại phòng 1
                        </Link>
                        <Link className=" italic text-slate-400 hover:text-primary"
                            href={`/category/2`}
                        >
                            Loại phòng 2
                        </Link>
                        <Link className=" italic text-slate-400 hover:text-primary"
                            href={`/category/3`}
                        >
                            Loại phòng 3
                        </Link>
                        <Link className=" italic text-slate-400 hover:text-primary"
                            href={`/category/4`}
                        >
                            Loại phòng 4
                        </Link>
                    </div>
                )}
            </div>
            <Link
                className={`${getActive('about') && 'bg-primary text-white'} hover:bg-primary/70 py-1 px-4 duration-150 hover:text-white`} 
                href={'/about'}
            >
                Thông tin giới thiệu
            </Link>
            <Link
                className={`${getActive('about') && 'bg-primary text-white'} hover:bg-primary/70 py-1 px-4 duration-150 hover:text-white`} 
                href={'/gallery'}
            >
                Bộ sưu tập
            </Link>
        </div>
    );
}

export default memo(SubNav);