import React, { memo } from 'react';
import ImageConainer from './ImageConainer';
import ServiceRoom from './ServiceRoom';
import { uid } from 'uid';
import { getFormatPrice } from '@/hooks';

const CardListRoomOfRoomType = memo(( { value } ) => {
    return (
        <div
            className='grid grid-cols-3 gap-4 border-2 rounded-lg p-2'
        >
            <ImageConainer
                value={ value?.ImageRooms[0]?.value}
                height={300}
            />
            <div
                className=' col-span-2 flex flex-col gap-2'
            >
                <div
                    className='text-[24px] font-medium'
                >
                    {
                        value?.name
                    }
                </div>
                <div
                    className='flex flex-col'
                >
                    {
                        value?.utilities?.map(
                            item =>
                            {
                                return (
                                    <ServiceRoom
                                        value={ item }
                                        key={ uid( 10 ) }
                                    />
                                )
                            }
                        )
                    }
                </div>
                <div
                    className='text-slate-500'
                >
                    Số lượng tối đa: { value?.capacity } khách
                </div>
                <div
                    className=' text-slate-500 italic text-[14px]'
                >
                    {
                        value?.description
                    }
                </div>
                <div
                    className='flex items-center gap-2'
                >

                    <span>
                        Giá phòng 1 đêm:
                    </span>
                    <span
                        className='text-red-color font-medium text-[18px]'
                    >
                        {
                            getFormatPrice(
                                value?.price
                            )
                        }
                    </span>
                </div>
            </div>
        </div>
    );
});
CardListRoomOfRoomType.displayName = 'CardListRoomOfRoomType'
export default CardListRoomOfRoomType;