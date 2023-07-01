'use client'

import React, { useEffect } from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
import HeaderSearchDate from '@/components/HeaderSearchDate';
import ToTop from '@/components/ToTop';
import ModalDetailRoom from '@/components/ModalDetailRoom';
import { useDispatch, useSelector } from 'react-redux';
import { roomSelect } from '@/store/reducer/room';
import HeaderSearchDateMobile from '@/components/HeaderSearchDateMobile';
import { setUser } from '@/store/reducer/user';
// import LoadingRouter from '@/components/LoadingRouter';
function DefaultLayout({children}) {
    const {isShow} = useSelector(roomSelect)
    const dispatch = useDispatch()
    useEffect(()=>
    {  
        dispatch(setUser(JSON.parse(localStorage.getItem('user'))))
    },[])
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
            <HeaderSearchDate/>
            <ToTop/>
            <ModalDetailRoom isOpen = {isShow}/>
            <HeaderSearchDateMobile/>
            {/* <LoadingRouter/> */}
        </div>
    );
}

export default DefaultLayout;