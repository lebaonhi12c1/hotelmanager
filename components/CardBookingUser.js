'use client'

import React, { memo, useContext } from 'react';
import ImageConainer from './ImageConainer';
import { formatDate, formatDateStringToDDMMYYYY, getFormatPrice, isDateInRange } from '@/hooks';
import { getToastError } from '@/hooks/toast';
import { userContext } from '@/context/user';

const CardBookingUser = memo(( {value } ) => {

    const { set_booking_cancel } = useContext( userContext)
    const get_style_status = value =>
    {
        switch (value) {
            case 'spending':
                return (
                    <span className="bg-slate-100 text-slate-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-slate-400 border border-slate-400">
                        Đang chờ xác nhận
                    </span>

                )
            case 'confirmed':
                return (
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        Đã xác nhận
                    </span>

                )
            case 'checkedIn':
                return (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        Check In
                    </span>

                )
            case 'checkedOut':
            return (
                <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">
                    Check Out
                </span>

            )
            case 'cancelled':
                return (
                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                        Hủy bỏ
                    </span>
                )
            case 'requestCancel':
                return (
                    <span className="bg-red-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
                        Yêu cầu hủy đơn
                    </span>
                )
        
        
            default:
                break;
        }
    }

    const handle_cancel = async( value ) =>
    {
        if( isDateInRange( value?.checkInDate, 2))
        {
            getToastError( 'Đã quả thời mà bạn được phép hủy phòng' )
            return
        }   
        
        set_booking_cancel( value )
    }
    return (
        <div>
            <div
                className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 border-t-2'
            >
                <ImageConainer
                    value = { value?.Room?.ImageRooms[0]?.value }
                    height = { 200 }
                />
                <div
                    className=' flex flex-col gap-2'
                >
                    <div
                        className='text-[20px] font-medium'
                    >
                        {
                            value?.Room?.name
                        }
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Mã đơn: { value?.id }
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Ngày dự kiến nhận: { formatDateStringToDDMMYYYY( value?.checkInDate ) }
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Ngày dự kiến trả : { formatDateStringToDDMMYYYY( value?.checkOutDate ) }
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Ngày đã nhận : { formatDate( value?.CheckIn?.date) }
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Ngày đã trả : { formatDate( value?.CheckOut?.date) }
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Trạng thái :
                        </div>
                        {
                            get_style_status( value?.status )
                        }
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Thành tiền: 

                        </div>
                        <span
                            className='text-red-500'
                        >
                            { getFormatPrice( value?.total) }
                        </span>
                    </div>
                    <div
                        className='flex items-center gap-2'
                    >
                        <div>
                            Đã thanh toán: 

                        </div>
                        <span
                            className='text-red-500'
                        >
                            { getFormatPrice(
                                value?.Payments?.reduce(
                                    ( total, item ) =>
                                    {
                                        return total + Number( item.totalPayment )
                                    },0
                                )
                            ) }
                        </span>
                    </div>
                </div>
                {
                    (value?.status === 'spending' || value?.status === 'confirmed') && 
                    (
                        <div
                            className='flex justify-end'
                        >
                            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-fit"
                                onClick={
                                    () => handle_cancel( value )
                                }
                            >
                                Hủy đơn
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
});

CardBookingUser.displayName = 'CardBookingUser'
export default CardBookingUser;