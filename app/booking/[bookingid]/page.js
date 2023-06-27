'use client'


import BookingStepOne from '@/components/BookingStepOne';
import CardRoomBooking from '@/components/CardRoomBooking';
import BookingStepTwo from '@/components/BookingStepTwo';
import BookingStepThree from '@/components/BookingStepThree';
import { useCallback } from 'react';
import { useState } from 'react';
function Booking(props) {
    
    const [step, set_step] = useState(1)
    
    const handle_set_step = useCallback((value) =>
    {   
        set_step(value)
    },[])


    const get_step_component = () =>
    {
        switch (step) {
            case 1:
                return <BookingStepOne handle_set_step={handle_set_step}/>
            case 2:
                return <BookingStepTwo handle_set_step={handle_set_step}/>
            case 3:
                return <BookingStepThree handle_set_step={handle_set_step}/>
        
            default:
                break;
        }
    }

    return (
        <div className='root-container'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='lg:col-span-2'>
                    {get_step_component()}
                </div>
                <div>
                    <CardRoomBooking/>
                </div>
            </div>
        </div>
    );
}

export default Booking;