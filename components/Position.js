import React from "react";
import { uid } from "uid";

function Position(props) {
    return (
        <div className="p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md shadow-slate-400" id="position">
            <div className="text-[24px] font-bold">Vị trí</div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.932134291629!2d106.67558947469652!3d10.73971398940684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fac96e4c9bf%3A0xa2bdf67b41f7a794!2zxJAuIENhbyBM4buXLCBwaMaw4budbmcgNCwgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1685713580714!5m2!1svi!2s"
                className="w-full h-[200px] lg:h-[300px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 py-4 border-b lg:h-fit h-[500px] overflow-y-auto">
                {Array(20)
                    .fill()
                    .map((item) => {
                        return (
                            <div className="flex flex-col gap-1" key={uid(10)}>
                                <div className="text-[12px] text-slate-400">
                                    Viện bảo tàng
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <div className="line-clamp-1">
                                        Viện bảo tàng chứng tích của quân dội
                                        Việt
                                    </div>
                                    <div className="font-bold whitespace-nowrap">
                                        4.3 km
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Position;
