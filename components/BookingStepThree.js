import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
function BookingStepThree({handle_set_step}) {
    
    const handle_paypal_success = () =>
    {
        console.log('paid')
    }

    const handle_paypal_error = () =>
    {
        console.log('something went wrong')
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-lg'>
                <PayPalButton
                     amount="1.00" // Số tiền thanh toán
                     currency="USD" // Đơn vị tiền tệ
                     clientId={process.env.PAYPAL_CLIENT_KEY}
                     shippingPreference='NO_SHIPPING' // Thay YOUR_CLIENT_ID bằng client ID của bạn
                     onSuccess={handle_paypal_success} // Xử lý khi thanh toán thành công
                     onError={handle_paypal_error} // Xử lý khi có lỗi thanh toán
                />
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