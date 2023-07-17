'use client'

import { roomContext } from "@/context/room";
import Image from "next/image";
import React, { useContext } from "react";
import { memo } from "react";
import { uid } from "uid";

function CardRoomHome({ value }) {
    const { set_room_info } = useContext( roomContext )
    return (
        <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md shadow-slate-400  ">
            <div className="hidden lg:block text-[18px] font-bold">{value?.title}</div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="flex flex-col gap-4 lg:flex-col-reverse">
                    <div className="h-[240px] lg:h-[200px] rounded-md overflow-hidden relative">
                        <Image
                            src={value?.ImageRoomTypes[0]?.value}
                            alt={value?.name}
                            fill={true}
                            className="object-cover"
                        />
                    </div>
                    <div className="font-bold lg:hidden">{value?.name}</div>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="text-[14px]">
                            <strong>Tối đa:</strong> {value?.capacity} người
                        </div>
                    </div>
                    <div>
                        {value?.services?.map(item=>
                        {
                            return (
                                <div className=" text-slate-500 flex items-center gap-1" key={uid(10)}>
                                    - {item}
                                </div>
                            )
                        })
                        }
                    </div>
                    <div>
                        {
                            value?.description
                        }
                    </div>
                </div>
                <div className="p-2 bg-primary text-white flex items-cetner justify-center hover:scale-105 active:scale-95 rounded-md select-none shadow-lg shadow-primary/70 uppercase h-fit duration-150 cursor-pointer text-center"
                    onClick={
                        () => set_room_info( value )
                    }
                >
                    Tham khảo thông tin
                </div>
            </div>
        </div>
    );
}

export default memo(CardRoomHome);
