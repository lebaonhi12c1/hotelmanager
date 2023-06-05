'use client'

import React from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
import HeaderSearchDate from '@/components/HeaderSearchDate';
import ToTop from '@/components/ToTop';
import ModalDetailRoom from '@/components/ModalDetailRoom';
import { useSelector } from 'react-redux';
import { roomSelect } from '@/store/reducer/room';
import HeaderSearchDateMobile from '@/components/HeaderSearchDateMobile';
function DefaultLayout({children}) {
    const {isShow} = useSelector(roomSelect)

    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
            <HeaderSearchDate/>
            <ToTop/>
            <ModalDetailRoom isOpen = {isShow}/>
            <HeaderSearchDateMobile/>
        </div>
    );
}

export default DefaultLayout;