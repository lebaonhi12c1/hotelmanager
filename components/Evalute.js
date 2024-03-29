'use client'

import Image from "next/image";
import React, { useContext, useState } from "react";
import {BsPen} from 'react-icons/bs'
import ControlReview from "./ControlReview";
import ListComent from "./ListComent";
import { ratingContext } from "@/context/rating_value";
function Evalute(props) {

    const [ open_control, set_open_control ] = useState( false )
    const { rating } = useContext( ratingContext )
    return (
        <div className="flex flex-col gap-4 bg-white p-4 " id="evalute">
            <div className="font-bold text-[24px]">
                Đánh giá của khách của Khách Sạn QN
            </div>
            <div className="flex items-center gap-4">
                <div className="w-fit p-2 bg-green-400 text-white rounded-md rounded-br-none">
                    { rating?.toFixed(1) || '10'}
                </div>
                <div className="text-green-400">Rất tốt</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative w-[150px] h-[150px]">
                    <Image
                        src={'https://img.freepik.com/premium-photo/real-estate-property-construction-logo-design_1948-20947.jpg?w=826'}
                        alt="logo"
                        loading="lazy"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-[24px] font-bold text-center">
                    Bạn đã ở chỗ này?
                </div>
                <div className="text-center">
                    Chia sẻ kinh nghiệm của bạn với chúng tôi.
                </div>
                <div className="flex items-center p-2 rounded-md gap-2 text-primary border border-primary hover:scale-105 active:scale-95 duration-150 cursor-pointer"
                    onClick={
                        () => set_open_control( true )
                    }
                >
                    <div>
                        <BsPen/>
                    </div>
                    <div>
                        Viết bình luận
                    </div>
                </div>
                <ControlReview
                    is_open = { open_control }
                />
                <ListComent/>
            </div>
        </div>
    );
}

export default Evalute;
