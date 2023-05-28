import Link from 'next/link';
import React from 'react';
import { VscAccount,VscMail,VscCallIncoming,VscInfo,VscBookmark} from 'react-icons/vsc'
import {motion} from 'framer-motion'
function MenuMobile({isOpen}) {
    return (
        isOpen &&  
        <motion.div 
            className=' absolute top-full right-0 bg-white p-4 flex flex-col gap-4 shadow-lg shadow-slate-300'
            initial={
                {
                    x: 100
                }
            }
            animate={
                {
                    x: 0
                }
            }
            exit={
                {
                    x: 100
                }
            }
        >
            <div className="flex items-center gap-4 w-[300px] border border-gray-200 rounded-lg py-2 px-2">
              <span className="flex-shrink-0 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full outline-none bg-transparent placeholder:text-[12px]"
                placeholder="Enter your content..."
              />
            </div>
            <Link
                className='flex items-center gap-4'
                href={'/login'}
            >
                <VscAccount fontSize={20}/>
                <div>Đăng nhập</div>
            </Link>
            <div
                className='flex items-center gap-4'
            >
                <VscMail fontSize={20}/>
                <div>hotelWgmail.com</div>
            </div>
            <div
                className='flex items-center gap-4'
            >
                <VscCallIncoming fontSize={20}/>
                <div>0123456789</div>
            </div>
            <div
                className='flex flex-col gap-4'
            >
               <div
                    className='flex items-center gap-4 bg-slate-200 p-2'
                >
                    <VscInfo fontSize={20}/>
                    <div>Khách sạn</div>
                </div>
                <Link
                    className='flex items-center gap-4 p-2'
                    href={'/about'}
                >
                    <VscBookmark fontSize={20}/>
                    <div>Giới thiệu về chúng tôi</div>
                </Link>
            </div>
        </motion.div>
    );
}

export default MenuMobile;