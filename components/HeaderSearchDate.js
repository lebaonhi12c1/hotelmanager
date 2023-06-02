'use client'

import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useEffect } from "react";
function HeaderSearchDate(props) {
    const [dateValue,setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })
    const [isShow, setShow] = useState(false)
    
    useEffect(()=>
    {
        const handleScroll = () =>
        {
            window.scrollY > 500 ? setShow(true) : setShow(false)
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        isShow && 
        <motion.div className="flex bg-primary fixed top-0 left-0 right-0 py-4 z-50"
            initial={
                {
                    y: -100,
                    opacity: 0,
                }
            }
            animate={
                {
                    y: 0,
                    opacity: 1
                }
            }
        >
            <div className="root-container">
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                    <div className="flex items-center flex-col lg:flex-row">
                        <div className=" border border-slate-900 p-2 w-full bg-white">
                            <div className="text-[10px] text-slate-400">
                                Nhận phòng
                            </div>
                            <input
                                type="date"
                                onChange={(e) =>
                                    setDateValue({
                                        ...dateValue,
                                        startDate: e.target.value,
                                    })
                                }
                            />
                            <input type="time" />
                        </div>
                        <div className=" border border-slate-900 p-2 w-full bg-white">
                            <div className="text-[10px] text-slate-400">
                                Trả phòng
                            </div>
                            <input
                                type="date"
                                onChange={(e) =>
                                    setDateValue({
                                        ...dateValue,
                                        endDate: e.target.value,
                                    })
                                }
                            />
                            <input type="time" />
                        </div>
                    </div>
                    <div className="border border-slate-900 bg-white p-2">
                        <div className="text-[10px] text-slate-400">Phỏng</div>
                        <div className="flex items-center">3 Khách</div>
                    </div>
                    <div className="bg-secondary text-white uppercase flex items-center justify-center font-bold p-4 lg:p-0">
                        nhận giá
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default HeaderSearchDate;
