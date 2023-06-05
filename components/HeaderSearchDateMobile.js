"use client";

import React from "react";
import { VscListSelection, VscClearAll } from "react-icons/vsc";
import { BsCalendar2Date } from "react-icons/bs";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import { useReponsive } from "@/hooks";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ModalAcceptPrice from "./ModalAcceptPrice";
function HeaderSearchDateMobile(props) {
    const reponesive = useReponsive();
    const [index,setIndex] = useState('overview')
    const [isMenu, setIsMenu] = useState(false);

    const [isShow, setShow] = useState(false);
    const [isShowModalAcceptPrice,setIsShowModalAcceptPrice] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 1000 ? setShow(true) : setShow(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        isShow &&
        reponesive && (
            <div className="flex flex-col fixed top-0 right-0 left-0 z-[60] shadow-md shadows-slate-400">
                <div className=" bg-primary py-2 relative">
                    <div className="root-container flex items-center justify-between">
                        <div className="flex items-center bg-white p-1 px-2 gap-4 rounded-md"
                            onClick={()=>setIsShowModalAcceptPrice(true)}
                        >
                            <div>
                                10/20/23 -
                            </div>
                            <div>
                                10/20/23
                            </div>
                            <BsCalendar2Date className="text-primary" />
                        </div>
                        <div
                            onClick={() => setIsMenu(!isMenu)}
                            className="lg:hidden text-white"
                        >
                            {isMenu ? (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                >
                                    <VscClearAll fontSize={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                >
                                    <VscListSelection fontSize={20} />
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <MenuMobile isOpen={isMenu} />
                </div>
                <div className="w-full bg-white py-2 ">
                   <div className="root-container gap-4 flex items-center overflow-x-auto text-sm">
                        <Link
                            href={"#overview"}
                            className={`${
                                index === "overview" &&
                                "text-primary border-b border-primary py-2"
                            } whitespace-nowrap`}
                            onClick={() => setIndex("overview")}
                        >
                            Tổng quát
                        </Link>
                        <Link
                            href={"#infrastructure"}
                            className={`${
                                index === "nfrastructure" &&
                                "text-primary border-b border-primary py-2"
                            } whitespace-nowrap`}
                            onClick={() => setIndex("nfrastructure")}
                        >
                            Cơ sở vật chất
                        </Link>
                        <Link
                            href={"#room"}
                            className={`${
                                index === "room" &&
                                "text-primary border-b border-primary py-2"
                            } whitespace-nowrap`}
                            onClick={() => setIndex("room")}
                        >
                            Phòng
                        </Link>
                        <Link
                            href={"#position"}
                            className={`${
                                index === "position" &&
                                "text-primary border-b border-primary py-2"
                            } whitespace-nowrap`}
                            onClick={() => setIndex("position")}
                        >
                            Vị trí
                        </Link>
                        <Link
                            href={"#evalute"}
                            className={`${
                                index === "evalue" &&
                                "text-primary border-b border-primary py-2"
                            } whitespace-nowrap`}
                            onClick={() => setIndex("evalue")}
                        >
                            Đánh giá của khách
                        </Link>
                   </div>
                </div>
                <ModalAcceptPrice isOpen={isShowModalAcceptPrice} handleClose={setIsShowModalAcceptPrice}/>
            </div>
        )
    );
}

export default HeaderSearchDateMobile;
