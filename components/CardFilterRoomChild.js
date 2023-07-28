import React, { memo, useContext } from 'react';
import ServiceRoom from './ServiceRoom';
import {BsCoin} from 'react-icons/bs'
import { Tooltip } from 'react-tooltip';
import { getFormatPrice, get_day_of_time } from '@/hooks';
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { cartContext } from '@/context/cart';
import { filterContext } from '@/context/filter';
import { getToastError } from '@/hooks/toast';

const CardFilterRoomChild = memo(({value}) => {
    const { filter } = useContext( filterContext )
    const { handle_add_item } = useContext(cartContext)
    const getPrice = ( value, count ) => 
    {
        if(isNaN(value) || isNaN(count))
        {
            return 0
        }
        return value * count
    }

    const handle_add_cart = ( value ) =>
    {
        if( !localStorage.getItem( 'user' ))
        {
            getToastError( 'Bạn phải đăng nhập dể được chọn phòng')
            return 
        }
        handle_add_item(

            {
                ...filter,
                ...value,
                price: getPrice(value?.price, get_day_of_time(filter.startDate, filter.endDate)),
            }
        )
    }
    return (
        <div
            className='flex flex-col gap-4 p-4 bg-white rounded-lg'
        >
            {/* {JSON.stringify(value)} */}
            <div className='flex flex-col gap-2'>
                <div className='text-[20px] font-medium'>
                    {value.name}
                </div>
                <div
                    className='flex items-baseline justify-between'
                > 
                    <ServiceRoom value='two-one'/>
                    <div
                        className='flex items-center gap-2 text-slate-500'
                    >
                        <AiOutlineUsergroupAdd/>
                        <span>
                            {value.capacity} khách
                        </span>
                    </div>
       
                    {/* <div className='text-[12px] text-red-color'>
                        phòng trống
                    </div> */}
                </div>
            </div>
            <div
                className='border-y py-4 flex flex-col lg:flex-row lg:justify-between'
            >
                <div 
                    className='flex flex-col gap-4'
                >
                    <div
                        className='flex gap-4 flex-wrap'
                    >
                        {
                            value?.utilities?.map(
                                item => 
                                {
                                    return (
                                        <ServiceRoom
                                            value={ item }
                                            key={item._id}
                                        />
                                    )
                                }
                            )
                        }
    
                    </div>
                    <div
                        className='text-slate-500 italic'
                    >
                        {
                            value?.description
                        }
                    </div>
                </div>
                <div
                    className='flex flex-col gap-1 text-right'
                >
                    <div
                        className='text-red-color text-[24px] font-medium'
                    >
                        { getFormatPrice(getPrice(value?.price, get_day_of_time(filter.startDate, filter.endDate)))} 
                    </div>
                    <div
                        className='text-[12px] text-slate-500 flex items-center gap-2'
                    >
                        <span>
                            {
                                getFormatPrice(
                                    value?.price
                                )
                            }
                        </span>
                        <div>
                            /phòng/đêm
                        </div>
                    </div>
                    <div
                        className='tooltip text-primary text-[12px] font-medium'
                    >
                        Giá cuối cùng
                        <Tooltip
                            anchorSelect='.tooltip'
                            variant='dark'
                            place='top'
                        >
                            <div
                                className='flex flex-col w-[300px] p-4 text-[16px] gap-4'
                            >
                                <div
                                    className='text-left'
                                >
                                    Giá cho một phòng một đêm
                                </div>
                                <div
                                    className='flex items-center justify-between'
                                >
                                    <span>
                                        Đêm 1
                                    </span>
                                    <span>
                                        {getFormatPrice(value?.price)}
                                    </span>
                                </div>
                                <div
                                    className='flex flex-col gap-2 border-y border-white py-2'
                                >
                                    <div
                                        className='flex items-center justify-between'
                                    >
                                        <span
                                            className=' whitespace-nowrap'
                                        >
                                            Giá phòng
                                        </span>
                                        <span>
                                            {getFormatPrice(getPrice(value?.price, get_day_of_time(filter.startDate, filter.endDate)))}
                                        </span>
                                    </div>
                                    <div
                                        className='flex items-center justify-between'
                                    >
                                        <span>
                                            Thuế và phí
                                        </span>
                                        <span>
                                            {getFormatPrice(0)}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className='flex items-center justify-between'
                                >
                                    <span>
                                        Tổng giá tiền
                                    </span>
                                    <span>
                                        {getFormatPrice(getPrice(value?.price, get_day_of_time(filter.startDate, filter.endDate)))}
                                    </span>
                                </div>
                            </div>
                        </Tooltip>
                    </div>
                    <button

                    >
                        <div
                            className='px-4 py-2 rounded-lg bg-red-color text-white hover:shadow-lg hover:shadow-red-color/70 duration-150 text-center active:scale-95'
                            onClick={
                                () => handle_add_cart( value )
                            }
                        >
                            Chọn phòng
                        </div>
                    </button>

                </div>
            </div>
            <div
                className='flex items-center gap-4 text-green-500'
            >
                <BsCoin/>
                Tiết kiệm 78%!
            </div>
        </div>
    );
});

CardFilterRoomChild.displayName = 'CardFilterRoomChild'
export default CardFilterRoomChild;