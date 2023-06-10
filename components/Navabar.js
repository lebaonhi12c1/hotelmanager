"use client";

import React, { memo } from "react";

import {
    VscSearch,
    VscAccount,
    VscListSelection,
    VscClearAll,
} from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, userSelect } from "@/store/reducer/user";
import { getAuth, signOut } from "firebase/auth";
import { getConect } from "@/firebase";
import { getAlert } from "@/hooks";
import { useRouter } from "next/navigation";
function Navabar(props) {
    const [isMenu, setIsMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const user = useSelector(userSelect);
    const router = useRouter()
    const ditpatch = useDispatch()
    const handleLogOut = async() =>
    {
        getConect()
        const auth = getAuth()
        try {
            await signOut(auth)
            ditpatch(clearUser())
            router.push('/')
        } catch (error) {
            getAlert('Thất bại vui lòng thử lại','error')
        }   
    }
    return (
        <div className="bg-white lg:h-[80px] h-[40px] flex items-center shadow-lg shadow-slate-200 lg:relative fixed top-0 right-0 left-0 z-50">
            <div className="root-container flex items-center h-full ">
                <div className="flex items-center gap-4 flex-1">
                    <div className="lg:text-[24px] text-[16px] font-bold text-secondary">
                        Hotelmix.vn
                    </div>
                    <div className="border h-[40px] border-slate-300 hidden lg:block"></div>
                    <div className="text-[14px] mt-[8px] text-slate-500 hidden lg:block">
                        Tìm ưu đãi tốt nhất
                    </div>
                </div>
                <div className="lg:flex gap-2 items-center h-full hidden">
                    <div className="h-full px-4 flex gap-2 items-center text-[24px] hover:bg-slate-200">
                        {search && (
                            <motion.input
                                type="search"
                                className="border border-slate-200 rounded-lg focus-visible:outline-primary focus-within:border-none py-1 px-2 text-[16px]"
                                placeholder="Search..."
                                style={{ transformOrigin: "right", scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                        <div
                            onClick={() => setSearch(!search)}
                            className="h-full flex items-center justify-center cursor-pointer"
                        >
                            <VscSearch />
                        </div>
                    </div>
                    {user ? (
                        <div className="flex items-center gap-1 relative">
                            <img src={user.photoURL} alt={user.displayName} className="w-[24px] h-[24px] rounded-full object-cover" />
                            <div className="text-primary">
                                {user.displayName}
                            </div>
                            <div className="absolute flex flex-col gap-2 bg-white top-full left-0 rounded-lg shadow-lg shadow-slate-300 w-[200px] p-4">
                                <div className="hover:text-primary hover:underline cursor-pointer" >
                                    Phòng đã đặt
                                </div>
                                <div  className="hover:text-primary hover:underline cursor-pointer"
                                    onClick={handleLogOut}
                                > 
                                    Đăng xuất
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            className="h-full px-4 flex gap-2 items-center hover:bg-slate-200"
                            href={"/login"}
                        >
                            <VscAccount className="text-[24px]" />
                            <div>Đăng nhập</div>
                        </Link>
                    )}
                    <div className="h-full px-4 flex items-center hover:bg-slate-200">
                        03261852147
                    </div>
                    <div className="h-full px-4 flex items-center hover:bg-slate-200">
                        hotel@gmail.com
                    </div>
                </div>
                <div onClick={() => setIsMenu(!isMenu)} className="lg:hidden">
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
            <MenuMobile isOpen={isMenu} handleClose={setIsMenu} />
        </div>
    );
}

export default memo(Navabar);
