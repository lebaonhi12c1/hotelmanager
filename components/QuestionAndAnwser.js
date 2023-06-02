import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { uid } from "uid";

function QuestionAndAnwser(props) {
    return (
        <div className="flex flex-col gap-4 bg-white p-4">
            <div className="text-[24px]">CHTG về The Blue Airport Hotel</div>
            <div className="flex flex-col gap-4">
                {Array(10)
                    .fill()
                    .map((item) => 
                    (
                        <div className="flex gap-2" key={uid(10)}>
                            <div className="font-bolb">
                                <IoIosArrowUp />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    Tôi có thể trả phòng sớm nhất và muộn nhất ở
                                    Khách Sạn Blue Airport TP. Hồ Chí Minh lúc
                                    mấy giờ?
                                </div>
                                <div className="p-2 rounded-md bg-[#EAF3FC] text-[12px]">
                                    Bạn có thể trả phòng khách sạn tới 12:00.
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default QuestionAndAnwser;
