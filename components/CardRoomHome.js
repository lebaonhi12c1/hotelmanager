'use client'

import { setIsShowOn, setRoom } from "@/store/reducer/room";
import Image from "next/image";
import React from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";

function CardRoomHome({ value }) {
    const dispatch = useDispatch()
    const handleShowDetail = () =>
    {   
        dispatch(setRoom(value))
        dispatch(setIsShowOn())
    }
    return (
        <div className="flex flex-col gap-2 bg-white p-4 rounded-md  ">
            <div className="hidden lg:block text-[18px] font-bold">{value?.title}</div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="flex flex-col gap-4 lg:flex-col-reverse">
                    <div className="h-[240px] lg:h-[200px] rounded-md overflow-hidden relative">
                        <Image
                            src={value?.image}
                            alt={value?.title}
                            fill={true}
                            className="object-cover"
                        />
                    </div>
                    <div className="font-bold lg:hidden">{value?.title}</div>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                    <div className="flex flex-col lg:flex-row gap-2">
                        {value?.option !== "none" && (
                            <div className="gap-1 text-[14px]">
                                <strong> Lựa chọn giường ngủ:</strong> <span>{value?.option}</span>
                            </div>
                        )}
                        <div className="text-[14px]">
                            
                            <strong>Tối đa:</strong> {value?.max} người
                        </div>
                    </div>
                    <div>
                        {value?.services.map(item=>
                        {
                            return (
                                <div className=" text-slate-500 flex items-center gap-1" key={uid(10)}>
                                    - {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="p-2 bg-primary text-white flex items-cetner justify-center hover:scale-105 active:scale-95 rounded-md select-none shadow-lg shadow-primary/70 uppercase h-fit duration-150 cursor-pointer text-center"
                    onClick={handleShowDetail}
                >
                    Thông tin chi tiết về phòng
                </div>
            </div>
        </div>
    );
}

export default memo(CardRoomHome);
