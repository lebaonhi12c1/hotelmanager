import Link from 'next/link';
import React from 'react';
import {VscCallIncoming,VscMail} from 'react-icons/vsc'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import footerlogo from '../public/images/paymentfooter.png'
import Image from 'next/image';
function Footer(props) {
    return (
        <div className='bg-white py-[40px]'>
            <div className='root-container'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                    <div className=' lg:col-span-2'>
                        <div className='flex  flex-col  gap-4'>
                            <div className='text-[23px] text-secondary font-bold leading-none'>
                                Hotelmix.vn
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='text-[30px] min-w-[100px] font-bold'>
                                    50+
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[20px] font-bold uppercase'>
                                        nhà cung cấp
                                    </div>
                                    <div className='text-[12px] text-slate-400 uppercase'>
                                        cung cấp phòng giá cả phải chăng
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='text-[30px] min-w-[100px] font-bold'>
                                    400k
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[20px] font-bold uppercase'>
                                        CHỖ Ở
                                    </div>
                                    <div className='text-[12px] text-slate-400 uppercase'>
                                        ĐÁP ỨNG TIÊU CHUẨN CHẤT LƯỢNG VÀ ĐÁNG TIN CẬY
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='text-[30px] min-w-[100px] font-bold'>
                                    120k
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[20px] font-bold uppercase'>
                                        KHÁCH HÀNG
                                    </div>
                                    <div className='text-[12px] text-slate-400 uppercase'>
                                        DU LỊCH VUI VẺ VỚI CHÚNG TÔI TRÊN TOÀN THẾ GIỚI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-[14px] font-bold uppercase'>
                            khách sạn
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Giới thiệu về chúng tôi
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                 Ủng hộ
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                  Câu hỏi thường gặp
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                 Điều khoản và điều kiện
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Chính sách An toàn và Bảo mật
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Dịch vụ đưa đón
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                   Khách sạn gần tôi
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-[14px] font-bold uppercase'>
                            điểm đến
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Các quốc gia
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Các thành phố
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Thành phố hàng đầu
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Sân bay
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Vùng
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Quận
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Các địa điểm nổi tiếng
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Các danh lam thắng cảnh
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Việt Nam
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Campuchia
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Thái Lan
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Singapore
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400'
                                href={'/about'}
                            >
                                Tất cả các điểm đến
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-[14px] font-bold uppercase'>
                            Liện hệ
                        </div>
                        <div className='flex flex-col gap-1'>                        
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400 flex items-center gap-2'
                                href={'/about'}
                            >
                                <VscCallIncoming fontSize={20}/>
                                <span>
                                    +44 113 519 9515
                                </span>
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400 flex items-center gap-2'
                                href={'/about'}
                            >
                                
                                <VscMail fontSize={20}/>
                                <span>
                                    support@booked.net
                                </span>
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400 flex items-center gap-2'
                                href={'/about'}
                            >
                                
                                <BsFacebook fontSize={20}/>
                                <span>
                                    facebook
                                </span>
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400 flex items-center gap-2'
                                href={'/about'}
                            >
                                
                                <BsInstagram fontSize={20}/>
                                <span>
                                    instagram
                                </span>
                            </Link>
                            <Link 
                                className='text-[14px] hover:text-primary hover:translate-x-1 duration-150 text-slate-400 flex items-center gap-2'
                                href={'/about'}
                            >
                                
                                <BsTwitter fontSize={20}/>
                                <span>
                                    twitter
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t mt-4 border-slate-400'>
                <div className='relative h-[80px]'>
                    <Image
                        src={footerlogo}
                        fill={true}
                        alt='image-payment-logo'
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;