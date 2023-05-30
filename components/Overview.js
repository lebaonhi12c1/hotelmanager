import React from 'react';

function Overview(props) {
    return (
        <div id='overview' className='bg-white p-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <div className='lg:text-[24px] font-bold'>
                    Tổng quát
                </div>
                <div className='text-slate-500 font-thin'>
                    The Blue Hotel TP. Hồ Chí Minh cách Dinh Độc Lập 5 km và cung cấp quầy lễ tân 24 giờ và dịch vụ dọn phòng. Bảo Tàng Chứng Tích Chiến Tranh cách 5 km từ The Blue Hotel.
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>
                    Vị trí
                </div>
                <div className='text-slate-500 font-thin'>
                    Khách sạn cách trung tâm thành phố TP. Hồ Chí Minh 5 km và cách sân bay Thanh pho Ho Chi Minh San bay 7 km. Khách sạn nằm ở gần HIECC Ho Chi Minh International Exhibition Conference Center. The Blue Hotel nằm gần Chùa Giác Lâm. Bạn có thể dễ dàng đến nhà ga Hoa Hung.
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>
                    Phòng
                </div>
                <div className='text-slate-500 font-thin'>
                    KĐiều hòa nhiệt độ, tủ quần áo và thẻ chìa khóa điện tử là tiêu chuẩn trong tất cả các phòng máy lạnh. Các phòng nghỉ này có phòng tắm riêng với đồ dùng vệ sinh cá nhân miễn phí, máy sấy tóc và dép đi trong nhà.
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>
                    Ăn uống
                </div>
                <div className='text-slate-500 font-thin'>
                    Du khách có thể thưởng thức các món ăn Hàn Quốc tại Hansol Korea cách khách sạn 5 phút đi bộ.
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>
                    Internet
                </div>
                <div className='text-slate-500 font-thin'>
                    Mạng không dây có sẵn trong toàn bộ khách sạn miễn phí.
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>
                    Chỗ đỗ xe
                </div>
                <div className='text-slate-500 font-thin'>
                    Có chỗ đỗ xe Tư nhân miễn phí tại trong khuôn viên.
                    <br />
                    Số phòng:   16.
                    <br />
                    Tên cũ: oyo 203 the blue hotel
                </div>
            </div>
        </div>
    );
}

export default Overview;