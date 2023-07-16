'use client'

import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { cartContext } from '@/context/cart';
import { getToastError } from '@/hooks/toast';
import { post_data } from '@/hooks/api';
import { CREATE_ORDER } from '@/api_variables';
import { getAlert } from '@/hooks';
function BookingStepThree({handle_set_step}) {
    const { total, cart } = useContext(cartContext)
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
                            value: (total/vnd.conversion_rates.VND).toFixed(2),
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
        const info_payment = JSON.parse( localStorage.getItem( 'payment' ) )
        const result = await post_data( 
            CREATE_ORDER,
            {
                room: cart.map(
                    item => 
                    {
                        return {
                            ...item,
                            checkInDate: item.startDate,
                            checkOutDate: item.endDate,
                        }
                    }
                ),
                employeeId: '',
                name: info_payment.info.username,
                email:  info_payment.info.email,
                phone: info_payment.info.phone,
                additionalServices: [],
                price: total,
                order_paypal_id: order.id
            }    
        )
        
        if( !result )
        {
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
            getAlert(
                result.message, 
                'error', 
                5000,
                true
            )
        }
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