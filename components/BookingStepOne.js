'use client'

import React, { memo, useContext, useState } from 'react';
import { getFormatPrice } from '@/hooks';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import validator from 'validator';
import { useEffect } from 'react';
import { cartContext } from '@/context/cart';
import useSWR from 'swr'
import { GET_SERVICE } from '@/api_variables';
import LoadingItem from './LoadingItem';
import { get_data } from '@/hooks/api';
function BookingStepOne({handle_set_step}) {
    const { data, isLoading } = useSWR(
        GET_SERVICE,
        get_data
    )
    const { services, set_services, item_payment, total_services } = useContext( cartContext )
    // const [ services, set_services ] = useState([])    
    const [info, set_info] = useState(null)
    const [validate_email, set_validate_email] = useState(false)
    const [validate_phone, set_validate_phone] = useState(false)
    const [validate_empty, set_validate_empty] = useState(
        {
            username: true,
            phone: true,
            email: true
        }
    )
    const handle_services = (e) =>
    {
        const value = e.target.value; // Giá trị JSON của ô checkbox đã chọn
        const isChecked = e.target.checked; // Trạng thái của ô checkbox (đã chọn hoặc không)

        // Cập nhật giá trị đã chọn dựa trên trạng thái của ô checkbox
        if (isChecked) {
            set_services((prevSelectedValues) => [...prevSelectedValues, JSON.parse(value)]);
        } else {
            set_services((prevSelectedValues) => prevSelectedValues.filter((item) => JSON.stringify(item) !== value));
        }
    }
    const handle_set_username = e =>
    {
        set_validate_empty({...validate_empty, username: validator.isEmpty(e.target.value)})
        set_info({...info, username: e.target.value})
    }

    const handle_set_email = e =>
    {
        validator.isEmail(e.target.value) ? set_validate_email(false) : set_validate_email(true)
        set_validate_empty({...validate_empty, email: validator.isEmpty(e.target.value)})
        set_info({...info, email: e.target.value})
    }
    
    const handle_set_phone = e =>
    {
        validator.isMobilePhone(e.target.value) ? set_validate_phone(false) : set_validate_phone(true)
        set_validate_empty({...validate_empty, phone: validator.isEmpty(e.target.value)})
        set_info({...info, phone: e.target.value})
    }

    const handle_next_step = () =>
    {
        if(validate_empty.username || validate_empty.email || validate_empty.phone )
        {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            )
            return
        }

        if(validate_email || validate_phone)
        {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            )
            return
        }
        localStorage.setItem('payment', JSON.stringify(
            {
                info,
                total: item_payment.price,
                services,
            }
        ))
        handle_set_step(2)
    }

    useEffect(() =>
    {
        if(localStorage.getItem('payment'))
        {
            const payment = JSON.parse(localStorage.getItem('payment'))
            set_info(payment.info)
            set_services( payment.services )
        }
        if(JSON.parse(localStorage.getItem('payment'))?.info)
        {
            set_validate_empty(
                {
                    username: false,
                    email: false,
                    phone: false,
                }
            )
        }
    },[])
    
    return (
        <div>
            <div className=' flex flex-col gap-10'>
                <div className=' col-span-2 flex flex-col gap-4'>
                        <div className='p-4 bg-white w-full flex flex-col gap-4 rounded-lg'>
                            <div className='flex flex-col gap-5'>
                                <div className='text-[24px] font-semibold'>
                                    Đặt phòng khách sạn
                                </div>
                                <div className='text-[18px]'>
                                    Hãy chắc chắn rằng tất cả thông tin trên trang này là chính xác trước khi tiến hành thanh toán.
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="username" className=' font-semibold'>Họ và tên</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Nhập họ và tên..."
                                    className=" border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent"
                                    defaultValue={info?.username}
                                    onChange={handle_set_username}

                                />
                            </div>
                            <div className='flex items-center flex-col lg:flex-row gap-4'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='flex items-baseline gap-4'>
                                        <label htmlFor="phone" className=' font-semibold'>Số điện thoại</label>
                                        {validate_phone &&
                                            <div className="text-red-color text-[12px]">
                                                Số điện thoại không hợp lệ
                                            </div>    
                                        }
                                    </div>
                                    <input
                                        type="text"
                                        name='phone'
                                        placeholder="Số diện thoại..."
                                        className={` border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent ${validate_phone && ' focus-visible:outline-red-color'}`}

                                        defaultValue={info?.phone}
                                        onChange={handle_set_phone}

                                    />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                   <div className='flex items-baseline gap-4'>
                                        <label htmlFor="email" className=' font-semibold'>Email</label>
                                        {validate_email &&
                                            <div className="text-red-color text-[12px]">
                                                Email của bạn không hợp lệ không hợp lệ
                                            </div>    
                                        }
                                   </div>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder="Nhập email..."
                                        className={` border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent ${validate_email && ' focus-visible:outline-red-color'}`}

                                        defaultValue={info?.email}
                                        onChange={handle_set_email}

                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className=' font-semibold'>
                                Yêu cầu đặt biệt
                            </div>
                           <div className='p-4 rounded-lg flex flex-col gap-4 bg-white'>
                                {
                                    isLoading ?
                                    (
                                        <div className="flex justify-center">
                                            <LoadingItem/>
                                        </div>
                                    ) :
                                    (
                                        <div className="">
                                            {
                                                data?.map(
                                                    ( item, index ) =>
                                                    {
                                                        return (
                                                            <div 
                                                                className="flex items-center gap-4"
                                                                key={ index }
                                                            >
                                                                <input 
                                                                    type="checkbox"
                                                                    id= { item.id }
                                                                    value= {JSON.stringify( item ) }
                                                                    onChange={ handle_services }
                                                                    checked={services?.some((selectedItem) => JSON.stringify(selectedItem) === JSON.stringify(item))}
                                                                />
                                                                <label htmlFor={ item.id }
                                                                    className='flex items-center gap-2'
                                                                >
                                                                    { item.name }
                                                                    <div
                                                                        className=' text-red-color'
                                                                    >
                                                                        {
                                                                            getFormatPrice( item.amount )
                                                                        }
                                                                    </div>
                                                                </label>

                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </div>
                                    )
                                }        
                           </div>
                            
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className=' font-semibold'>
                                Chính sách hủy đặt phòng
                            </div>
                            <div className='p-4 rounded-lg bg-white'>
                                Đặt phòng này <strong>không thể hoàn tiền và không thể đổi lịch.</strong>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className=' font-semibold'>
                                Chi tiết giá
                            </div>
                            <div className='p-4 rounded-lg bg-white flex flex-col gap-10'>
                                <div className="flex items-center justify-between">
                                    <div className=' font-semibold'>
                                        Thành tiền 
                                    </div>
                                    <div className=' font-semibold text-red-color'>
                                        {getFormatPrice(item_payment?.price + total_services )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className=' font-semibold'>
                                        Thanh toán trước 
                                    </div>
                                    <div className=' font-semibold text-red-color text-[20px]'>
                                        {getFormatPrice( ( item_payment?.price + total_services ) * 0.3 )}
                                    </div>
                                </div>
                                <div className='flex gap-2 pb-4 border-b'>
                                    <div className='text-primary text-[24px]'>
                                        <AiOutlineInfoCircle/>
                                    </div>
                                    <div className='text-primary font-semibold'>
                                        Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện của Traveloka để được giải đáp
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className=' font-semibold'>
                                        Thuế và phí
                                    </div>
                                    <div className=' font-semibold '>
                                        {getFormatPrice(0)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'
                            onClick={handle_next_step}
                        >
                            <button
                                className='px-4 py-2 rounded-md bg-red-color text-white hover:shadow-lg hover:shadow-red-color/70 hover:scale-105 active:scale-95 duration-150 select-none'
                            >
                                Tiếp tục
                            </button>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default memo(BookingStepOne);