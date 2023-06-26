import React from 'react';

function Booking(props) {
    
    return (
        <div className='root-container'>
            <div className='center-mobile-element flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[24px] font-semibold'>
                        Đặt phòng khách sạn
                    </div>
                    <div className='text-[18px]'>
                        Hãy chắc chắn rằng tất cả thông tin trên trang này là chính xác trước khi tiến hành thanh toán.
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className=' col-span-2 flex flex-col gap-4'>
                        <div className='p-4 bg-white w-full flex flex-col gap-4 rounded-lg'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="username" className=' font-semibold'>Họ và tên</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Nhập họ và tên..."
                                    className=" border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent"
                                />
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="phone" className=' font-semibold'>Số điện thoại</label>
                                    <input
                                        type="text"
                                        name='phone'
                                        placeholder="Số diện thoại..."
                                        className=" border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="email" className=' font-semibold'>Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder="Nhập email..."
                                        className=" border border-slate-200 rounded-lg py-2 px-4 focus-visible:outline focus-visible:outline-primary focus-within:border-white outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className=' font-semibold'>
                                Yêu cầu đặt biệt
                            </div>
                           <div className='p-4 rounded-lg flex flex-col gap-4 bg-white'>
                                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2' >
                                    <div className='flex items-cetner gap-4'>
                                        <input type="checkbox" id="no_smoking" />
                                        <label htmlFor="no_smoking">
                                            Không hút thuốc
                                        </label>
                                        
                                    </div>
                                    <div className='flex items-cetner gap-4'>
                                        <input type="checkbox" id="floor" />
                                        <label htmlFor="floor">
                                            Tần lầu
                                        </label>
                                        
    
                                    </div>
                                    <div className='flex items-baseline gap-4'>
                                        <input type="checkbox" id="interconnecting_room" />
                                        <label htmlFor="interconnecting_room">
                                            Phòng liên thông
                                        </label>
                                        
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div> Loại phòng</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-cetner gap-4'>
                                                <input type="radio" id="one_bed" name='bed'/>
                                                <label htmlFor="one_bed">
                                                    Giường đơn
                                                </label>
                                                
                                            </div>
                                            <div className='flex items-cetner gap-4'>
                                                <input type="radio" id="lg_bed" name='bed'/>
                                                <label htmlFor="lg_bed">
                                                    Giường lớn
                                                </label>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="enter_time">
                                            Giờ nhận phòng
                                        </label>
                                        <input type="time" id="enter_time" name='enter_time' className='border rounded-lg px-2'/>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="enter_time">
                                            Giờ trả phòng
                                        </label>
                                        <input type="time" id="enter_time" name='enter_time' className='border rounded-lg px-2'/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                
                                    <label htmlFor="more">
                                        Khác
                                    </label>
                                    <textarea name="" id="" rows="5" placeholder='Nhập yêu cầu...' className='p-4 border rounded-lg focus-visible:outline-primary focus-within:border-white'></textarea>
                                </div>
                           </div>
                            
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className=' font-semibold'>
                                Chính sách hủy đặt phòng
                            </div>
                            <div className='p-4 rounded-lg bg-white'>
                                Đặt phòng này <strong>không thể hoàn tiền và không thể đổi lịch.</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Booking;