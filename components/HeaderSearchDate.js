'use client'

import React, { useContext } from "react";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import ControlPage from "./ControlPage";
import { useReponsive } from "@/hooks";
import ClientOption from "./ClientOption";
import {FiChevronDown} from 'react-icons/fi'
import { filterContext } from "@/context/filter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getToastError } from "@/hooks/toast";
function HeaderSearchDate(props) {
    const responesive = useReponsive()
    const { filter ,setFilter } = useContext( filterContext )
    const [isShow, setShow] = useState(false)
    const [showOption, setShowOption] = useState(false)
    const router = useRouter()
    useEffect(()=>
    {
        const handleScroll = () =>
        {
            window.scrollY > 1000 ? setShow(true) : setShow(false)
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])

    const handle_filter_room = () =>
    {
        if( new Date( filter.startDate ).getTime() >= new Date( filter.endDate ).getTime() )
        {
            getToastError( 'Khoảng ngày đến và ngày đi của bạn không hợp lệ', 5000)
            return;
        }
        if( new Date( filter.startDate).getTime() < new Date() )
        {
            getToastError( 'Khoảng ngày đến và ngày đi của bạn không hợp lệ', 5000)
            return;
        }
        router.push( `/rooms?${ new URLSearchParams( {...filter, child: JSON.stringify( filter.child ) } ).toString() }` )
    }
    return (
        isShow && 
        !responesive &&
        <motion.div className="flex flex-col fixed top-0 left-0 right-0 z-50  shadow-md shadow-slate-200"
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
                                    value={ filter.startDate}
                                    type="date"
                                    onChange={ (e) => setFilter( { ...filter, startDate: e.target.value})}
                                />
                            </div>
                            <div className=" border border-slate-900 p-2 w-full bg-white">
                                <div className="text-[10px] text-slate-400">
                                    Trả phòng
                                </div>
                                <input
                                    value={ filter.endDate}
                                    type="date"
                                    onChange={ (e) => setFilter( { ...filter, endDate: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="border flex items-center justify-between border-slate-900 bg-white p-2 relative"
                            onClick={()=>setShowOption(!showOption)}
                        >
                            <div>
                                <div className="text-[10px] text-slate-400">Phỏng</div>
                                <div className="flex items-center">{ filter.adult} khách, { filter.child.length } trẻ em</div>
                            </div>
                            <FiChevronDown/>
                            {showOption && <ClientOption isOpen={true} handleClose={setShowOption}/>}
                        </div>
                        <div className="bg-secondary hover:bg-white hover:text-black text-white uppercase flex items-center justify-center font-bold p-4 lg:p-0 h-full cursor-pointer"
                            onClick={ handle_filter_room }
                        >
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
