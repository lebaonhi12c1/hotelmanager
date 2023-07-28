import Link from 'next/link';
import React, { useContext } from 'react';
import { VscAccount,VscMail,VscCallIncoming,VscInfo,VscBookmark} from 'react-icons/vsc'
import {BiBed} from 'react-icons/bi'
import {motion} from 'framer-motion'
import useSWR from 'swr'
import { get_data } from '@/hooks/api';
import { uid } from 'uid';
import { userContext } from '@/context/user';
import { useRouter } from 'next/navigation';
function MenuMobile({isOpen}) {
    const {data} = useSWR(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/room-type?status=published`, get_data)
    const { user, set_user_info } = useContext(  userContext )
    const router = useRouter()
    const handle_log_out = () =>
    {
        localStorage.clear()
        set_user_info(null)
        router.push('/')
    }
    return (
        isOpen &&  
        <motion.div 
            className=' absolute top-full right-0 bg-white p-4 flex flex-col gap-4 shadow-lg shadow-slate-300 max-h-[450px] overflow-auto'
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
            {
                user && 
                <Link
                    className='flex items-center gap-4'
                    href={'/profile'}
                >
                    <VscAccount fontSize={20}/>
                    <div
                        className=' text-primary'
                    >
                        {
                            user?.name
                        }
                    </div>
                </Link>
            }
            {
                user && 
                <div
                    className='flex items-center gap-4'
                    onClick={
                        handle_log_out
                    }
                >
                    <VscAccount fontSize={20}/>
                    <div
                        className=' text-red-color'
                    >
                        Đăng xuất
                    </div>
                </div>
            }
            {
                !user &&
                (
                    <Link
                        className='flex items-center gap-4'
                        href={'/login'}
                    >
                        <VscAccount fontSize={20}/>
                        <div>Đăng nhập</div>
                    </Link>
                )
            }
            <a
                className='flex items-center gap-4'
                href={ `mailTo:hotelWgmail.com` }
            >
                <VscMail fontSize={20}/>
                <div>hotelWgmail.com</div>
            </a>
            <a
                className='flex items-center gap-4'
                href='tel:0123456789'
            >
                <VscCallIncoming fontSize={20}/>
                <div>0123456789</div>
            </a>
            <div
                className='flex flex-col gap-4'
            >
               <div
                    className='flex items-center gap-4 bg-slate-200 p-2'
                >
                    <VscInfo fontSize={20}/>
                    <div>Loại phòng</div>
                </div>
                {
                    data?.map(
                        item =>
                        {
                            return (
                                <Link className='flex items-center gap-1'
                                    href={`/rooms/${item?.code}`}
                                    key={ uid( 10 ) }
                                >
                                    <BiBed/>
                                    {
                                        item?.name
                                    }
                                </Link>
                            )
                        }
                    )
                }
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
                <Link
                    className='flex items-center gap-4 p-2'
                    href={'/gallery'}
                >
                    <VscBookmark fontSize={20}/>
                    <div>Bộ sưu tập</div>
                </Link>
            </div>
        </motion.div>
    );
}

export default MenuMobile;