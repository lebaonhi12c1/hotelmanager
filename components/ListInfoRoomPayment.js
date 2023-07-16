import { cartContext } from '@/context/cart';
import React, { memo, useContext } from 'react';
import CardInfoRoomPayment from './CardInfoRoomPayment';

const ListInfoRoomPayment = memo(() => {
    const { cart } = useContext( cartContext )
    return (
        <div
            className='flex flex-col gap-2'
        >
            {
                cart.map(
                    item =>
                    {
                        return (
                            <CardInfoRoomPayment
                                value = { item }
                                key={item._id}
                            />
                        )
                    }
                )
            }
        </div>
    );
});
ListInfoRoomPayment.displayName = 'ListInfoRoomPayment'
export default ListInfoRoomPayment;