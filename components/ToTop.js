'use client'

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md'
import {motion} from 'framer-motion'
function ToTop(props) {
    const [isShow, setShow] = useState(false)
    
    useEffect(()=>
    {
        const handleScroll = () =>
        {
            window.scrollY > 1000 ? setShow(true) : setShow(false)
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    const handleToTop = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        isShow && 
        <motion.div className=' fixed right-4 bottom-4 w-[40px] h-[40px] bg-primary text-white flex items-center justify-center text-[24px] rounded-md cursor-pointer animate-bounce'
            onClick={handleToTop}
            initial={
                {
                    width: 0
                }
            }
            animate={
                {
                    width: '40px'
                }
            }
        >
            <MdKeyboardArrowUp/>
        </motion.div>
    );
}

export default ToTop;