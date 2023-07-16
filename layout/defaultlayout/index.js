'use client'

import React from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
import HeaderSearchDate from '@/components/HeaderSearchDate';
import ToTop from '@/components/ToTop';
import ModalDetailRoom from '@/components/ModalDetailRoom';
import HeaderSearchDateMobile from '@/components/HeaderSearchDateMobile';
import LoadingRouter from '@/components/LoadingRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '@/context/user';
import FilterContext from '@/context/filter';
import CartContext from '@/context/cart';
function DefaultLayout({children}) {
    return (
        <div>
            <UserContext>
               <FilterContext>
                    <CartContext>
                        <Navbar/>
                        {children}
                        <Footer/>
                        <HeaderSearchDate/>
                        <ToTop/>
                        <ModalDetailRoom isOpen = {false}/>
                        <HeaderSearchDateMobile/>
                        <LoadingRouter/>
                        <ToastContainer/>
                    </CartContext>
               </FilterContext>
            </UserContext>
        </div>
    );
}

export default DefaultLayout;