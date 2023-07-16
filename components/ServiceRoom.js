import React from 'react';
import {MdOutlineBedroomChild,MdWifi,MdOutlineFreeBreakfast,MdSevereCold,MdOutlineWaterDrop,MdOutlineSell} from 'react-icons/md'
import {FaSmokingBan} from 'react-icons/fa'
import {HiOutlineReceiptRefund} from 'react-icons/hi'
import {AiOutlineSchedule} from 'react-icons/ai'
import {BsCaretLeftSquareFill} from 'react-icons/bs'
function ServiceRoom({value}) {

    
    const getBedType = () =>
    {
        switch (value) {
            
            case 'one-two-people':
                return (
                    <div className="flex text-primary items-center gap-2">
                        <MdOutlineBedroomChild/>
                        <div>
                            1 Giường X2
                        </div>
                    </div>
                )
            case 'two-one':
                return (
                    <div className="flex text-green-500 items-center gap-2">
                        <MdOutlineBedroomChild/>
                        <div>
                            1 Giường X2
                        </div>
                    </div>
                )
            case 'Wifi':
                return (
                    <div className="flex text-green-500 items-center gap-2">
                        <MdWifi/>
                        <div>
                            Wifi miễn phí
                        </div>
                    </div>
                )
            case 'no-smoking':
                return (
                    <div className="flex text-green-500 items-center gap-2">
                        <FaSmokingBan/>
                        <div>
                            Không hút thuốc
                        </div>
                    </div>
                )
            case 'no-breakfast':
                return (
                    <div className="flex items-center gap-2 text-slate-400">
                        <MdOutlineFreeBreakfast/>
                        <div>
                            Không bao gồm bữa sáng
                        </div>
                    </div>
                )
            case 'breakfast':
                return (
                    <div className="flex items-center gap-2 text-green-400">
                        <MdOutlineFreeBreakfast/>
                        <div>
                            Bứa sáng miễn phí
                        </div>
                    </div>
                )
            case 'unrefund':
                return (
                    <div className="flex items-center gap-2  text-slate-400">
                        <HiOutlineReceiptRefund/>
                        <div>
                            Không hoàn trả
                        </div>
                    </div>
                )
            case 'no-schedule-change':
                return (
                    <div className="flex items-center gap-2 text-slate-400">
                        <AiOutlineSchedule/>
                        <div>
                            Không thay đổi lịch
                        </div>
                    </div>
                )
            case 'air-conditioner':
                return (
                    <div className="flex items-center gap-2 text-primary">
                        <MdSevereCold/>
                        <div>
                            Máy lạnh
                        </div>
                    </div>
                )
            case 'hot-water':
                return (
                    <div className="flex items-center gap-2 text-red-color">
                        <MdOutlineWaterDrop/>
                        <div>
                            Nước nóng
                        </div>
                    </div>
                )
            case 'voucher'    :
                return (
                    <div className="flex items-center gap-2 text-primary">
                        <MdOutlineSell/>
                        <div>
                            Khuyến mãi
                        </div>
                    </div>
                )
                case 'tv'    :
                return (
                    <div className="flex items-center gap-2 text-slate-500">
                        <BsCaretLeftSquareFill/>
                        <div>
                            Tivi
                        </div>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <div>
            {getBedType()}
        </div>
    );
}

export default ServiceRoom;