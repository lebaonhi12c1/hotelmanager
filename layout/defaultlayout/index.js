'use client'

import React, { useContext } from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
import HeaderSearchDate from '@/components/HeaderSearchDate';
import ToTop from '@/components/ToTop';
import ModalDetailRoom from '@/components/ModalDetailRoom';
import HeaderSearchDateMobile from '@/components/HeaderSearchDateMobile';
// import LoadingRouter from '@/components/LoadingRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '@/context/user';
import FilterContext from '@/context/filter';
import CartContext from '@/context/cart';
import RoomContext from '@/context/room';
import RatingContext from '@/context/rating_value';
function DefaultLayout({children}) {
    return (
        <div>
            <UserContext>
               <FilterContext>
                    <CartContext>
                        <RoomContext>
                            <RatingContext>
                                <Navbar/>
                                {children}
                                <Footer/>
                                <HeaderSearchDate/>
                                <ToTop/>
                                <ModalDetailRoom/>
                                <HeaderSearchDateMobile/>
                                {/* <LoadingRouter/> */}
                                <ToastContainer/>
                            </RatingContext>
                        </RoomContext>
                    </CartContext>
               </FilterContext>
            </UserContext>
        </div>
    );
}

export default DefaultLayout;