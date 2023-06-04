'use client'
import React, { memo } from "react";
import Image from "next/image";

function CardFeatrureRoom({ value }) {
    const formatNumber = number => number.toLocaleString('en-US')
    return (
        <div className="flex flex-col shadow-md shadow-slate-200">
            <div className="h-[220px] relative">
                <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                />
            </div>
            <div className="bg-white p-4 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                        <div className="text-green-500 relative">
                            <span>Rất tốt</span>
                            <div className="absolute flex items-center justify-center text-white bottom-full left-0 w-[40px] h-[40px] bg-green-500 border-2 border-white rounded-md rounded-br-none">
                               <span> 9.3</span>
                               <div className="absolute left-full bottom-0 border-[5px] border-green-500 border-t-transparent border-r-transparent">
                                    
                               </div>
                            </div>
                        </div>
                        <div className="text-slate-500 text-[12px]">3 đánh giá</div>
                    </div>
                    <div className="text-[12px] text-slate-500">phòng</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-[12px] font-bold">
                        {value.title}
                    </div>
                    <div className="text-red-500">
                        {formatNumber(350000)}vnd
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CardFeatrureRoom);
