import React, { memo, useContext } from 'react';
import ServiceRoom from './ServiceRoom';
import { uid } from 'uid';
import Image from 'next/image';
import { cartContext } from '@/context/cart';
const CardInfoRoomPayment = memo(( ) => {

    const { item_payment }  = useContext( cartContext )

    return (
        <div>
            <div className='p-4 bg-slate-200'>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày nhận phòng:
                    </div>
                    <div className=' font-semibold'>
                        {
                            item_payment?.startDate
                        }
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày trả phòng:
                    </div>
                    <div className=' font-semibold'>
                        {
                            item_payment?.endDate
                        }
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <div className=' font-semibold'>
                    {
                        item_payment?.name
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            khách/phòng
                        </div>
                        <div>
                            {
                                item_payment?.capacity
                            }
                        </div>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            kiểu giường
                        </div>
                        <div>
                            item_payment
                        </div>
                    </div> */}
                </div>
                <div className='flex gap-4'>
                    <div className='relative w-[80px] h-[60px]'>
                        <Image
                            src={ item_payment?.ImageRooms[0]?.value }
                            fill
                            loading='lazy'
                            alt='room-image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        { item_payment?.utilities?.map(item =>
                        {
                            return (
                                <ServiceRoom
                                    value={item}
                                    key={ uid(10) }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
});

CardInfoRoomPayment.displayName = 'CardInfoRoomPayment'
export default CardInfoRoomPayment;