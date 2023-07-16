'use client'

import React, { useContext } from 'react';
import ListCart from '@/components/ListCart';
import Ads from '@/components/Ads';
import Link from 'next/link'
import { cartContext } from '@/context/cart';
function Cart(props) {
    const { cart } = useContext( cartContext )
    return (
        <div
            className='root-container'        
        >
            <div
                className='flex flex-col gap-4'
            >
                <div
                    className='text-[24px] font-medium'
                >
                    Phòng của bạn
                </div>
                <div
                    className='grid grid-cols-1 lg:grid-cols-4 gap-4'               
                >
                    <div
                        className=' col-span-3 flex flex-col gap-4'
                    >
                        <ListCart/>
                        {
                            cart.length > 0 &&
                            (
                                <div
                                    className='flex justify-end'
                                >
                                    <Link
                                    
                                            href={'/booking/rooms'}
                                    >
                                            <button
                                                className='bg-red-color rounded-lg text-white py-2 px-4 hover:shadow-lg hover:shadow-red-color/70 hover:scale-105 active:scale-95 duration-200 font-mono'
                                            >
                                                Đặt ngay
                                            </button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Ads/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;