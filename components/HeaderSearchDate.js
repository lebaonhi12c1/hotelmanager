'use client'

import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import ControlPage from "./ControlPage";
import { useReponsive } from "@/hooks";
import ClientOption from "./ClientOption";
import { useDispatch, useSelector } from "react-redux";
import { filterSelect, setEndDate, setStartDate } from "@/store/reducer/filter";
import {FiChevronDown} from 'react-icons/fi'
function HeaderSearchDate(props) {
    const responesive = useReponsive()
    const dispatch = useDispatch()
    const filter = useSelector(filterSelect)
    const [isShow, setShow] = useState(false)
    const [showOption, setShowOption] = useState(false)
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
                                    type="date"
                                    value={filter?.startDate}
                                    onChange={(e) =>
                                       dispatch(setStartDate(e.target.value))
                                    }
                                />
                            </div>
                            <div className=" border border-slate-900 p-2 w-full bg-white">
                                <div className="text-[10px] text-slate-400">
                                    Trả phòng
                                </div>
                                <input
                                    type="date"
                                    value={filter?.endDate}
                                    onChange={(e) =>
                                       dispatch(setEndDate(e.target.value))
                                    }
                                />
                            </div>
                        </div>
                        <div className="border flex items-center justify-between border-slate-900 bg-white p-2 relative"
                            onClick={()=>setShowOption(!showOption)}
                        >
                            <div>
                                <div className="text-[10px] text-slate-400">Phỏng</div>
                                <div className="flex items-center">{filter?.adult + filter?.child} khách</div>
                            </div>
                            <FiChevronDown/>
                            {showOption && <ClientOption isOpen={true} handleClose={setShowOption}/>}
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
