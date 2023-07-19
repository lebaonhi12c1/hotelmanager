import React, { memo, useCallback, useContext } from 'react';
import useSWR from 'swr'
import { get_data } from '@/hooks/api';
import { userContext } from '@/context/user';
import { uid } from 'uid';
import CardBookingUser from './CardBookingUser';
import Dinalog from './Dinalog';
import { getToastError, getToastSuccess } from '@/hooks/toast';
import LoadingItem from './LoadingItem';
const ListBookingUser = memo(() => {

    const { user, booking_cancel, set_booking_cancel } = useContext( userContext)
    const { data, isLoading } = useSWR(
        `${ process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/booking/customer/${ user?.id }`,
        get_data
    )
    const handle_cancel_order = useCallback(
        async() =>
        {
            try 
            {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/booking/${ booking_cancel?.id }/status`,
                    {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                        ,
                        body: JSON.stringify(
                            {
                                status: 'requestCancel'
                            }
                        )
                    }
                )

                const result = await res.json()
                if( !result.success)
                {   
                    getToastError( result.message )
                    set_booking_cancel(null)
                    return

                }
                getToastSuccess( result.message )
                set_booking_cancel( null )
                return
                
            } 
            catch (error) 
            {
                getToastError( 'Yêu cầu hủy đơn đặt phòng thất bại')
                return
            }
        },
        [ booking_cancel, set_booking_cancel ]
    )
    return (
        <div
            className=' flex flex-col lg:max-h-[600px] lg:overflow-auto'
        >
            {
                isLoading && 
                (
                    <div className="flex items-center justify-center p-4">
                        <LoadingItem/>
                    </div>
                )
            }
            {
                data?.map(
                    item => 
                    {
                        return (
                            <CardBookingUser
                                value = {
                                    item
                                }
                                key = {
                                    uid( 10 )
                                }
                            />
                        )
                    }
                )
            }
            {
                booking_cancel && 
                (
                    <Dinalog
                        heading = 'Bạn muốn hủy đơn phòng này ?'
                        handle_submit = {
                            handle_cancel_order
                        }
                        handle_close = {
                            () => set_booking_cancel( null )
                        }
                    />
                )
            }
        </div>
    );
});

ListBookingUser.displayName = 'ListBookingUser'

export default ListBookingUser;