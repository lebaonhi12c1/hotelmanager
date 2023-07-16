import React, { memo } from 'react';
import ServiceRoom from './ServiceRoom';
import { uid } from 'uid';
import Image from 'next/image';
const CardInfoRoomPayment = memo(( { value } ) => {

    return (
        <div>
            <div className='p-4 bg-slate-200'>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày nhận phòng:
                    </div>
                    <div className=' font-semibold'>
                        {
                            value?.startDate
                        }
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="text-slate-500">
                        Ngày trả phòng:
                    </div>
                    <div className=' font-semibold'>
                        {
                            value?.endDate
                        }
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <div className=' font-semibold'>
                    {
                        value?.name
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            khách/phòng
                        </div>
                        <div>
                            {
                                value?.capacity
                            }
                        </div>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                        <div className='text-slate-500'>
                            kiểu giường
                        </div>
                        <div>
                            value
                        </div>
                    </div> */}
                </div>
                <div className='flex gap-4'>
                    <div className='relative w-[80px] h-[60px]'>
                        <Image
                            src={'https://img.freepik.com/free-photo/yellow-living-room-interior-with-free-space_43614-934.jpg?w=900&t=st=1687875896~exp=1687876496~hmac=2edf299d279c4de19ba04701f1f09b83945f926b446f291de5ab1963ec26d4fd'}
                            fill
                            loading='lazy'
                            alt='room-image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        { value?.utilities.map(item =>
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