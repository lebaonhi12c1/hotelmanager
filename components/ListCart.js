'use client'

import React, { memo, useContext } from 'react';
import CartItem from './CartItem';
import { cartContext } from '@/context/cart';
import { uid } from 'uid';
import ImageConainer from './ImageConainer';
import Link from 'next/link';
import Button from './Button';
import { filterContext } from '@/context/filter';
const ListCart = memo(() => {
    const { filter } = useContext( filterContext )
    const {cart} = useContext(cartContext)
    return (
        <div
            
        >
            {
                cart.length > 0 ?
                (
                    <div
                        className='flex flex-col bg-white rounded-lg'
                    >
                        {
                            cart.map(
                                item =>
                                {
                                    return <CartItem key={uid(10)} value={item}/>
                                }
                            ) || 'Loading...'
                        }
                    </div>
                ) :
                (
                    <div className=" flex-col gap-4 items-center p-4 bg-white rounded-lg relative">
                      <div 
                            className='brightness-75'
                      >
                            <ImageConainer
                                value={'https://img.freepik.com/free-vector/laptop-computer-with-electronic-business-icons_24911-45488.jpg?w=996&t=st=1689338676~exp=1689339276~hmac=10e36907a0c9877f4d091919b3b93391227135c1f166ad52b5f4e395df861614'}
                                height={500}
                            />
                      </div>
                        <span
                            className=' absolute inset-0 flex items-center justify-center'
                        >
                            <div 
                                className='flex flex-col items-center gap-4'
                            >
                                <div
                                    className='text-[24px] italic text-white'
                                    style={
                                        {
                                            textShadow: '2px 2px 4px #000'
                                        }
                                    }
                                >
                                    Không có phòng nào được chọn
                                </div>
                                <Link
                                   href={`/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }`}
                                >
                                    <Button
                                        type = 'primary'
                                        heading = { 'Đặt ngay' }
                                    />
                                </Link>
                            </div>
                        </span>
                    </div>
                )
            }
        </div>
    );
});

ListCart.displayName = 'ListCart'
export default ListCart;