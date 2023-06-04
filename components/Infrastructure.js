import React from "react";
import SliderInfrastructure from "./SliderInfrastructure";
import { memo } from "react";
import { uid } from "uid";
function Infrastructure(props) {
    const data = [
        {
            title: "Chung",
            list: [
                "Wifi",
                "Bãi đỗ xe miễn phí",
                "Giữ hành lí",
                "TV",
                "Thang máy",
                "Tiện nghi nhà bếp",
                "Nhân phòng/Trả phòng",
                "Dịch vụ phòng",
                "Dịch vụ dọn phòng",
            ],
        },
        {
            title: "Dịch vụ",
            list: ["Dịch vụ phòng", "Dịch vụ dọn phòng"],
        },
        {
            title: "Dịch vụ cho doanh nhân",
            list: ["Fax/Photocopy"],
        },
        {
            title: "Tầm nhìn",
            list: ["View hương ra thành phố"],
        },
        {
            title: "Tiện nghi phòng",
            list: ["Điều hòa nhiệt độ"],
        },
        {
            title: "Phòng tắm",
            list: ["Đồ dùng vệ sinh cá nhân miễn phí"],
        },
        {
            title: "Tự nấu nướng",
            list: ["Ấm đun nước điện"],
        },
        {
            title: "Thiết bị",
            list: ["Tivi màng hình phẳng", "Điện thoại"],
        },
        {
            title: "Nội thất",
            list: ["Thảm lót"],
        },
    ];
    return (
        <div className="flex flex-col gap-4 p-4 bg-white" id="infrastructure">
            <div className="lg:text-[24px] font-bold">Cơ sở vật chất</div>
            <SliderInfrastructure />
            <div className="grid lg:grid-cols-4 grid-cols-1">
                {data.map((item) => (
                    <div className="flex flex-col gap-2 p-2 lg:border" key={uid(10)}>
                        <div className="font-bold text-[18px]">{item.title}</div>
                        {item.list.map(label =>
                        (
                            <div className="flex flex-col gap-2" key={uid(10)}>
                                <div className="text-slate-500">{label}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Infrastructure);
