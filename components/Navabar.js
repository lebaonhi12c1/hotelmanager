"use client";

import React, { memo, useContext } from "react";

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
import { getAuth, signOut } from "firebase/auth";
import { getConect } from "@/firebase";
import { getAlert } from "@/hooks";
import { useRouter } from "next/navigation";
import SubNav from "./SubNav";
import { userContext } from "@/context/user";
import { cartContext } from "@/context/cart";
import { BiBed } from 'react-icons/bi'
import ImageConainer from "./ImageConainer";
function Navabar(props) {
    const {cart} = useContext(cartContext)
    const {user, set_user_info} = useContext(userContext)
    const [isMenu, setIsMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [ user_option, set_user_option ] = useState( false )
    const router = useRouter()
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

    const handle_logout_user_pwd = () =>
    {
        localStorage.clear()
        set_user_info(null)
        router.push('/')
    }

    return (
        <div className="bg-white shadow-lg shadow-slate-200">
            <div className="bg-white lg:h-[80px] h-[40px] flex items-center  lg:relative fixed top-0 right-0 left-0 z-50">
                <div className="root-container flex items-center h-full border-b ">
                    <div className="flex items-center gap-4 flex-1">
                        <Link href={'/'}>
                            <div className="lg:text-[24px] text-[16px] font-bold text-secondary">
                                Hotelmix.vn
                            </div>
                        </Link>
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
                            <div className="flex items-center gap-1 relative"
                                onMouseEnter={ () => set_user_option( true ) }
                                onMouseLeave={ () => set_user_option( false ) }
                            >
                                <ImageConainer
                                    value = { user.photoURL }
                                    height = { 24 }
                                    width = { 24 }
                                />
                                <div className="text-primary">
                                    {user.displayName}
                                </div>
                                {
                                    user_option &&
                                    (
                                        <div className="absolute flex flex-col gap-2 bg-white top-full left-0 rounded-lg shadow-lg shadow-slate-300 w-[200px] p-4">
                                            {/* <div className="hover:text-primary hover:underline cursor-pointer" >
                                                Phòng đã đặt
                                            </div> */}
                                            <Link
                                                href={ '/profile' }
                                            >
                                                <div  className="hover:text-primary hover:underline cursor-pointer"
                                                    
                                                > 
                                                    Trang cá nhân
                                                </div>
                                            </Link>
                                            <div  className="hover:text-red-color hover:underline cursor-pointer"
                                                onClick={handle_logout_user_pwd}
                                            > 
                                                Đăng xuất
                                            </div>
                                        </div>
                                    )
                                }
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
                        <Link href={'/cart'}>
                            <div
                                className="relative hover:text-primary"
                            >
                                <div
                                    className="flex items-center gap-2"                                
                                >
                                    <BiBed
                                        className="text-[24px]"
                                    />
                                    <div>
                                        Phòng bạn đã chọn
                                    </div>
                                </div>
                                <div
                                    className="w-fit px-2 rounded-md text-[12px] bg-red-color text-white absolute top-0 left-full flex items-center justify-center"
                                >
                                    { cart.length }
                                </div>
                            </div>
                        </Link>
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
            <SubNav/>
        </div>
    );
}

export default memo(Navabar);
