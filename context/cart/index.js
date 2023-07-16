
import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { getToastError, getToastSuccess } from "@/hooks/toast";
export const cartContext = createContext()

const CartContext = ({ children }) =>
{
    const [cart, set_cart] = useState([])
    const [total, set_total] = useState(0)

    useEffect(
        () =>
        {
            if(!localStorage.getItem('cart'))
            {
                return
            }
            set_cart(JSON.parse(localStorage.getItem('cart')))
        },
        []
    )

    const get_total = () =>
    {
        let total = 0
        cart.forEach(item =>
        {
            total += item.price
        })
        set_total(total)
    }

    useEffect(
        () =>
        {
            get_total()
            localStorage.setItem('cart', JSON.stringify(cart))
        },
        [cart]
    )

    const handle_add_item = value =>
    {
        if( cart.find(
            item => item._id === value._id
        ) )
        {
            getToastError('Phòng này bạn đã chọn rồi')
            return
        }
        set_cart([...cart, value])
        getToastSuccess( 'Chọn phòng thành công' )
    }

    const handle_remove_item = value =>
    {
        set_cart(cart.filter(item => item._id!== value._id))
       
    }

    const handle_update_item = value =>
    {
        set_cart(cart.map(item => item._id === value._id? value : item))
       
    }
    return (
        <cartContext.Provider
            value={
                {
                    cart,
                    total,
                    handle_add_item,
                    handle_remove_item,
                    handle_update_item,
                }
            }        
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartContext