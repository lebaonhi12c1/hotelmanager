'use client'

import Image from "next/image";
import HeadPage from "@/components/HeadPage";
import Infrastructure from "@/components/Infrastructure";
import Rooms from "@/components/Rooms";
import Position from "@/components/Position";
import Evalute from "@/components/Evalute";
import Overview from "@/components/Overview";
import QuestionAndAnwser from "@/components/QuestionAndAnwser";
import SliderRoom from "@/components/SliderRoom";
import { MdOutlineWatchLater, MdKeyboardReturn, MdPets, MdLocationPin, MdOutlineAirplanemodeActive,MdTrain,MdDirectionsBus } from "react-icons/md";
import { useEffect, useState } from "react";
import Map from "@/components/Map";
import { post_data } from "@/hooks/api";
export default function Home() {
    const data = [
        {
            image: "https://img.freepik.com/premium-photo/minimalist-interior-bedroom_33739-523.jpg?w=1060",
            title: "Suite",
            max: 2,
            option: "Giường đơn hoặc giường đôi",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg?w=996&t=st=1685626938~exp=1685627538~hmac=7ec7ed09a1b91b5fb08099506fad84f97fae292f8f3b15eb8a9b1c635d99045b",
            title: "Phòng Tiêu Chuẩn Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=996&t=st=1685626922~exp=1685627522~hmac=89acb6b43dbb5abb0781484332fd0c5704c872582d5068454e56fd3928d131a2",
            title: "Phòng Superior Giường Đôi",
            max: 2,
            option: "none",
            services: [
                "Nhìn tả cảnh quan",
                "Vòi sen",
                "Hồ bơi riêng",
                "Điều hòa nhiệt độ",
            ],
        },
    ];

    // const post = async() =>
    // {
    //     for (let index = 0; index < 10; index++) {
    //         var res = await post_data( 'http://localhost:8800/api/room', 
    //         {
    //             "code": "ROOM401" + index,
    //             "name": "Deluxe Double Room" + index,
    //             "description": "A comfortable room with basic amenities.",
    //             "price": 550000 + index * 20000,
    //             "image": [
    //                 {
    //                     valueId: index,
    //                     value: index % 2 === 0 ? 'https://img.freepik.com/free-photo/interior-bedroom-white-creamy-tones_181624-16134.jpg?w=1380&t=st=1690379890~exp=1690380490~hmac=6bc3deba424e3518edf2ca14a991936989ffc7a19ebb954ed6930498cee873c9' : 'https://img.freepik.com/free-psd/cozy-bedroom-hotel-room-with-double-bed-wooden-furniture_176382-1530.jpg?w=1380&t=st=1690379908~exp=1690380508~hmac=421d810d51ecef3bb0bd20585bd01a5b1f6bca0f68a159f91944530ca11f247e',

    //                 },
    //                 {
    //                     valueId: index + 1,
    //                     value: 'https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-439.jpg?w=1380&t=st=1690379936~exp=1690380536~hmac=33cceba36f2cfa3676e95598fd1cce119c65a1db745dc4718e9ca112367df3ec',
    //                 },
    //             ],
    //             "capacity": 2,
    //             "roomType": 4, // Chỉ số id của loại phòng trong bảng RoomTypes
    //             "employee": 2, // Chỉ số id của nhân viên trong bảng Employees
    //             "status": "published",
    //         },
    //         console.log(res)
    //     )
            
    //     }
    // }
    
    // useEffect(
    //     () =>
    //     {
    //         post()
    //     }
    //     ,[]
    // )

    const [ map, set_map ] = useState( false )
    return (
        <main className="bg-white flex flex-col gap-10">
            <HeadPage />
            <div className="lg:w-fit lg:px-10 mx-auto flex flex-col gap-10 bg-slate-200 rounded-sm py-10">
                <div className="root-container grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <div className="flex flex-col gap-4 col-span-5">
                        <Overview />
                        <Infrastructure />
                        <Rooms />
                        <Position />
                        <Evalute />
                        <QuestionAndAnwser />
                    </div>
                    <div className="lg:flex hidden flex-col gap-4 col-span-2">
                        <div className="p-4 flex flex-col gap-2 bg-white shadow-md shadow-slate-400 rounded-lg">
                            <div className="font-bold">Địa chỉ</div>
                            <div className="text-slate-500">
                                2/37 Phan Thuc Duyen Street, Ward 4, TP. Hồ Chí
                                Minh, Việt Nam
                            </div>
                            <div className="relative h-[150px]">
                                <Image
                                    src={
                                        "https://img.freepik.com/free-photo/map-isolated-background_53876-71425.jpg?w=900&t=st=1686063522~exp=1686064122~hmac=99856ec79fe7bae4483f191c0ea1e5f6db5b4f6cf9ef6a786c59b9d51f74f8ce"
                                    }
                                    fill
                                    alt="map-img"
                                    loading="lazy"
                                    className="object-cover"
                                />
                                <div className="p-2 text-center text-white bg-primary rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase"
                                    onClick={ () => set_map( true ) }
                                >
                                    Xem bản đồ
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4 bg-white shadow-md shadow-slate-400 rounded-lg">
                            <div className="text-[20px] font-bold">
                                Những điều cần phải biết
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdOutlineWatchLater />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>NHẬN PHÒNG</div>
                                        <div className="text-[12px]">
                                            từ 14:00-23:59
                                        </div>
                                    </div>
                                    <div className="text-green-500">
                                        miễn phí
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdKeyboardReturn />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>TRẢ PHÒNG</div>
                                        <div className="text-[12px]">
                                            đến 12:00
                                        </div>
                                    </div>
                                    <div className="text-green-500">
                                        miễn phí
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdPets />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>VẬT NUÔI</div>
                                        <div className="text-[12px]">
                                            Không cho phép mang theo vật nuôi.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4 bg-white shadow-md shadow-slate-400 rounded-lg">
                            <div className="text-[20px] font-bold">
                                Khoảng cách
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdLocationPin />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>TRUNG TÂM THÀNH PHỐ</div>
                                        <div className="text-[12px]">
                                            TP. Hồ Chí Minh
                                        </div>
                                    </div>
                                    <div className="">3.5 km</div>
                                </div>
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdOutlineAirplanemodeActive />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>SÂN BAY</div>
                                        <div className="text-[12px]">
                                            Thanh pho Ho Chi Minh San bay (SGN)
                                        </div>
                                    </div>
                                    <div className="">2.7 km</div>
                                </div>
                                <div className="flex gap-2 justify-between py-4 border-y border-slate-200">
                                    <div className="text-[28px]">
                                        <MdTrain />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>XE LỬA</div>
                                        <div className="text-[12px]">
                                            Hoa Hung Train Station
                                        </div>
                                    </div>
                                    <div>3.0 km</div>
                                </div>
                            </div>
                            <div className="bg-blue-200 flex flex-col gap-2 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <MdDirectionsBus className="text-[28px]"/>
                                    <div className="font-bold">
                                        Cần xe đưa đón?
                                    </div>
                                </div>
                                <div>
                                    Bạn có thể đặt xe đưa đón sau khi hoàn thành đặt phòng khách sạn.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="root-container">
                <SliderRoom heading={"Phòng được đặt nhiều nhất"} data={data} />
            </div>
            <Map
                is_open = { map }
                handleClose = { set_map }
            />
        </main>
    );
}
