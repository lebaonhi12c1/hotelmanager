import React from 'react';
import Navbar from '@/components/Navabar';
import Footer from '@/components/Footer';
function DefaultLayout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default DefaultLayout;