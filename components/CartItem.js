import { cartContext } from '@/context/cart';
import React, { memo, useContext } from 'react';
import {GrTrash} from 'react-icons/gr'
import ImageConainer from './ImageConainer';
import ServiceRoom from './ServiceRoom';
import Button from './Button';
import { uid } from 'uid';
import { useRouter } from 'next/navigation';
import { getFormatPrice } from '@/hooks';
const CartItem = memo(({value}) => {
    const  { handle_remove_item, set_item_payment} = useContext(cartContext)
    const router = useRouter()
    const handle_set_item_payment = ( value ) =>
    {
        set_item_payment(value)
        router.push( '/booking/room' )
    }
    return (
        <div
            className='flex flex-col gap-4 bg-white rounded-lg p-4 border-t'
        >
            <div
                className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4'
            >
                <div 

                >
                    <ImageConainer
                        value={value?.ImageRooms[0]?.value }
                        height={200}
                    />
                </div>
                <div
                    className=' col-span-2'
                >
                    <div
                        className='flex flex-col gap-4 h-full'
                    >
                        <div
                            className='text-[18px] font-medium'
                        >
                            {
                                value?.name
                            }
                        </div>
                        <div
                            className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10'
                        >
                            <div
                                className='flex items-center gap-2'
                            >
                                <span>
                                    Ngày bắt đầu:
                                </span>
                                <span
                                    className='font-medium'
                                >
                                    {
                                        value?.startDate
                                    }
                                </span>
                            </div>
                            <div
                                className='flex items-center gap-2'
                            >
                                <span>
                                    Ngày kết thúc:
                                </span>
                                <span
                                    className='font-medium'
                                >
                                    {
                                        value?.endDate
                                    }
                                </span>
                            </div>
                        </div>
                        <div
                            className='flex items-center gap-4'
                        >
                            {
                                value?.utilities?.map(
                                    item =>
                                    {
                                        return (
                                            <ServiceRoom value={item} key={ uid(10) }/>
                                        )
                                    }
                                ) || 'Đang cập nhật...'
                            }
                        </div>
                        <div
                            className='text-muted'
                        >

                        </div>
                        <div
                            className='flex items-center gap-4'
                        >
                            <span>
                                Giá:
                            </span>
                            <span
                                className='text-red-color text-[20px] font-medium'
                            >
                                {
                                    getFormatPrice(  value?.price )
                                }
                            </span>
                        </div>
                        <div 
                            className='flex items-center gap-4 mt-auto'
                        >
                            <div
                            >
                                <Button
                                    heading = 'Xóa'
                                    type = 'danger'
                                    handler = { () => handle_remove_item(value) }
                                />
                            </div>
                            <div
                            >
                                <Button
                                    heading = 'Đặt ngay'
                                    type = 'primary'
                                    handler = { 
                                        () => handle_set_item_payment( value )
                                     }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
CartItem.displayName = 'CartItem'
export default CartItem;