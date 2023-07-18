
import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { getToastError, getToastSuccess } from "@/hooks/toast";
import { check_empty } from "@/hooks";
export const cartContext = createContext()

const CartContext = ({ children }) =>
{
    const [cart, set_cart] = useState([])
    const [total, set_total] = useState(0)
    const [ item_payment, set_item_payment ] = useState( null )
    const [ services, set_services ] = useState( [] )
    const [ total_services, set_total_services ] = useState( 0 )
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


    useEffect(
        () =>
        {
            if(!localStorage.getItem('item_payment'))
            {
                return
            }
            set_item_payment(JSON.parse(localStorage.getItem('item_payment')))
        },
        []
    )




    useEffect(
        () =>
        {
            localStorage.setItem( 'item_payment', JSON.stringify( item_payment ))
        },
        [item_payment]
    )
    
  
    useEffect(
        () =>
        {
            if(!localStorage.getItem('services'))
            {
                return
            }
            set_services(JSON.parse(localStorage.getItem('services')))
        },
        []
    )


    useEffect(
        () =>
        {
            get_total_services()
            localStorage.setItem( 'services', JSON.stringify( services ))
        },
        [ services ]
    )


    const handle_add_item = value =>
    {
        
        if( cart.find(
            item => item.code === value.code
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

        set_cart(cart.filter(item => item.code!== value.code))
       
    }

    const handle_update_item = value =>
    {
        set_cart(cart.map(item => item._id === value._id? value : item))
       
    }

    const get_total_services = () =>
    {
        set_total_services(
            services.reduce(
                ( total, item ) => total + Number(item.amount),
                0
            )
        )
    }
    return (
        <cartContext.Provider
            value={
                {
                    cart,
                    total,
                    item_payment,
                    services,
                    total_services,
                    set_total_services,
                    set_services,
                    set_item_payment,
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