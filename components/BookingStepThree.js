import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

function BookingStepThree({handle_set_step}) {
    // Xử lý khi thanh toán được hoàn tất
    const handlePaymentSuccess = (details, data) => {
        console.log("Payment successful:", details);
    };

    // Xử lý khi xảy ra lỗi trong quá trình thanh toán
    const handlePaymentError = (error) => {
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
                           clientId: "AeAS1GYMimlF7Kuzidr5FAF9SCd-Xxd0WbNZdvV3P4USB0v4NDr0uOEJf--Ak83rSbwMItANAu4BKk4J",
                        }
                    }
                    
                >
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            // Tạo đơn hàng PayPal
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: "10.00", // Số tiền thanh toán
                                  },
                                },
                              ],
                            });
                          }}
                        onApprove={(data, actions) => {
                        // Xác nhận và hoàn tất thanh toán
                        return actions.order.capture().then(function (details) {
                            handlePaymentSuccess(details, data);
                        });
                        }}
                        onError={handlePaymentError}
                        onCancel={handlePaymentCancel}
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