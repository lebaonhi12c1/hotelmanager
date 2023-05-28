
'use client'

import React,{memo} from 'react';

import {VscSearch, VscAccount,VscListSelection, VscClearAll} from 'react-icons/vsc'
import MenuMobile from './MenuMobile';
import { useState } from 'react';
import {motion} from 'framer-motion'
function Navabar(props) {
    const [isMenu,setIsMenu] = useState(false)
    return (
        <div
            className='bg-white lg:h-[80px] h-[40px] flex items-center shadow-lg shadow-slate-200 relative'
        >
            <div 
                className='root-container flex items-center h-full '
            >
                <div
                    className='flex items-center gap-4 flex-1'
                >
                    <div
                        className='lg:text-[24px] text-[16px] font-bold text-secondary'
                    >
                        Hotelmix.vn
                    </div>
                    <div
                        className='border h-[40px] border-slate-300 hidden lg:block'
                    >
                        
                    </div>
                    <div
                        className='text-[14px] mt-[8px] text-slate-500 hidden lg:block'
                    >
                        Tìm ưu đãi tốt nhất
                    </div>
                </div>
                <div className='lg:flex items-center h-full hidden'>
                    <div
                        className='h-full px-4 flex items-center text-[24px] hover:bg-slate-200'
                    >
                        <VscSearch/>
                    </div>
                    <div
                        className='h-full px-4 flex gap-2 items-center hover:bg-slate-200'
                    >
                        <VscAccount className='text-[24px]'/>
                        <div>Đăng nhập</div>
                    </div>
                    <div
                        className='h-full px-4 flex items-center hover:bg-slate-200'
                    >
                        03261852147
                    </div>
                    <div
                     className='h-full px-4 flex items-center hover:bg-slate-200'
                    >
                        hotel@gmail.com
                    </div>
                </div>
                <div
                    onClick={()=>setIsMenu(!isMenu)}
                    className='lg:hidden'
                >
                    {isMenu ?
                        <motion.div
                            initial={
                                {
                                    opacity: 0
                                }
                            }
                            animate={
                                {
                                    opacity: 1
                                }
                            }
                            exit={
                                {
                                    opacity: 0
                                }
                            }
                        >
                            <VscClearAll fontSize={20}/>
                        </motion.div>
                        :
                        <motion.div
                            initial={
                                {
                                    opacity: 0
                                }
                            }
                            animate={
                                {
                                    opacity: 1
                                }
                            }
                            exit={
                                {
                                    opacity: 0
                                }
                            }
                        >
                            <VscListSelection fontSize={20}/>
                        </motion.div>
                    }
                </div>
            </div>
             <MenuMobile isOpen={isMenu} handleClose={setIsMenu}/>
        </div>
    );
}

export default memo(Navabar);