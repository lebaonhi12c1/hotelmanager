'use client'

import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { cartContext } from '@/context/cart';
import { getToastError } from '@/hooks/toast';
import { post_data } from '@/hooks/api';
import { CREATE_ORDER } from '@/api_variables';
import { check_empty, getAlert } from '@/hooks';
import { userContext } from '@/context/user';
function BookingStepThree({handle_set_step}) {
    const { item_payment, total_services, services } = useContext(cartContext)
    const { user } = useContext( userContext )
    const get_payment_amount = (item_payment, vnd, service_total) =>
    {
        console.log(item_payment, vnd, service_total)
        return (( ( item_payment + service_total ) / vnd ) * 0.3).toFixed(2)
    }

    const createOrder = async (data, actions) => {

        const res = await fetch('https://v6.exchangerate-api.com/v6/40fb119e5ebbd8258531a310/latest/USD')
        const vnd = await res.json()
        if( !vnd.conversion_rates.VND )
        {
            getToastError( 'Lỗi hệ thống trong quá trình chuyển đổi tiền tệ ')
            return
        }

        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: get_payment_amount(
                                item_payment.price,
                                vnd.conversion_rates.VND,
                                total_services
                            )
                        },
                    },
                ],
                application_context: {
                    shipping_preference: "NO_SHIPPING"
                }
            })
            .then((orderID) => {
                console.log(orderID);
                return orderID;
            });
    }
    // Xử lý khi thanh toán được hoàn tất
    const handlePaymentSuccess = async(data, actions) => {
        const order = await actions.order.capture()
        if( !order )
        {
            getToastError('Lỗi không nhận được dữ liệu thanh toán')
            return
        }

        console.log(order)
        const result = await post_data( 
            CREATE_ORDER,
            {
                customer: user.id,
                room: item_payment.id,
                checkInDate: item_payment.startDate,
                checkOutDate: item_payment.endDate,
                paymentAmount: ( item_payment.price +  total_services) * 0.3,
                total: ( item_payment.price +  total_services),
                services: services || []
            }    
        )
        
        if( check_empty( result ))
        {
            console.log('1')
            getAlert(
                result.message, 
                'error', 
                5000,
                true
            )
            return;
        }
        if( !result )
        {
            console.log('2')

            getAlert(
                `Có lỗi xảy ra trong quá trình tiếp nhận đơn đơn đặt phòng của bạn, nếu bạn đã thanh toán vui lòng cung cấp mã đơn đặt phòng ${ order.id } thông qua email hoặc số điện thoại để chúng tôi tiến hành hoàn tiền`, 
                'error', 
                5000,
                true
            )
            return;
        }
        if( !result.success ) 
        {
            console.log('3')

            getAlert(
                result.message, 
                'error', 
                5000,
                true
            )
            return
        }
        localStorage.removeItem( 'payment' )
        localStorage.removeItem( 'services')
        getAlert( result.message, 'success', 5000, true)

        return
    };

    // Xử lý khi xảy ra lỗi trong quá trình thanh toán
    const handlePaymentError = (error) => {
        getToastError('Lỗi trong quá trình thanh toán vui lòng thử lại')
        console.error("Payment error:", error);
    };

    // Xử lý khi người dùng hủy thanh toán
    const handlePaymentCancel = (data) => {
        console.log("Payment cancelled:", data);
    }; 
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-lg'>
                <PayPalScriptProvider
                    options={
                        {
                            
                            clientId: process.env.NEXT_PUBLIC_APP_PAYPAL_KEY,
                            currency: "USD",
                        }
                    }
                >
                    <PayPalButtons
                        onApprove={handlePaymentSuccess}
                        onError={handlePaymentError}
                        onCancel={handlePaymentCancel}
                        createOrder={createOrder}
                    />
                </PayPalScriptProvider>
            </div>
            <div className='flex items-center justify-end gap-4'>
                <div className='px-4 py-2 rounded-md bg-primary text-white hover:shadow-lg hover:shadow-primary/70 hover:scale-105 active:scale-95 duration-150 select-none'
                    onClick={() => handle_set_step(2)}
                >
                    Quay lại
                </div>
            </div>
        </div>
    );
}

export default BookingStepThree;