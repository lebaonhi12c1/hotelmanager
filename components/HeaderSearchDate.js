'use client'

import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import ControlPage from "./ControlPage";
import { useReponsive } from "@/hooks";
function HeaderSearchDate(props) {
    const responesive = useReponsive()
    const [dateValue,setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })
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
    return (
        isShow && 
        !responesive &&
        <motion.div className="flex flex-col fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-md shadow-slate-200"
            initial={
                {
                    height: 0,
                    opacity: 0,
                }
            }
            animate={
                {
                    height: 'fit-content',
                    opacity: 1
                }
            }
        >
            <div className="bg-primary py-4">
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
            </div>
            <div className="bg-white">
                <ControlPage/>
            </div>
        </motion.div>
    );
}

export default HeaderSearchDate;
