import React from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
import HeaderSearchDate from '@/components/HeaderSearchDate';
import ToTop from '@/components/ToTop';
function DefaultLayout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
            <HeaderSearchDate/>
            <ToTop/>
        </div>
    );
}

export default DefaultLayout;