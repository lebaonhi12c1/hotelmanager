'use client'


import BookingStepOne from '@/components/BookingStepOne';
import CardRoomBooking from '@/components/CardRoomBooking';
import BookingStepTwo from '@/components/BookingStepTwo';
import BookingStepThree from '@/components/BookingStepThree';
import { useCallback, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
function Booking(props) {
    const [step, set_step] = useState(1)
    const router = useRouter()
    const handle_set_step = useCallback((value) =>
    {   
        set_step(value)
    },[])

    useEffect(
        () =>
        {
            if( JSON.parse( localStorage.getItem( 'cart' ) ).length > 0 )
            {
                return
            }
            router.push( '/' )
        },
        [router]
    )

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