"use client";
import { getConect } from "@/firebase";
import { BsGoogle } from "react-icons/bs";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getAlert } from "@/hooks";
import { useState } from "react";
import { post_data } from "@/hooks/api";
import Link from "next/link";
import validator from "validator";
export default function Register() {
    const router = useRouter();
    const [loading_register, set_loading_register] = useState(false);
    const [loading, setLoading] = useState(false);
    const handle_register = async (e) => {
        e.preventDefault();
        set_loading_register(true);
        if(!validator.isMobilePhone(e.target[2].value))
        {
            getAlert('Số điện thoại không hợp lệ')
            set_loading_register(false)
            return
        }

        if(e.target[7].value !== e.target[8].value)
        {
            getAlert('Mật khẩu không khớp')
            set_loading_register(false)
            return
        }


        const result = await post_data(
            `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/customer/register`,
            {
                username: e.target[6].value,
                password: e.target[7].value,
                name: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value,
                gender: e.target[4].checked ? 'female': 'male',
                dateOfBirth: e.target[3].value
            }
        )
        if(result.status !== 200)
        {
            getAlert(result.message, 'error')
            set_loading_register(false)
            return
        }
        getAlert(result.message, 'success')
        set_loading_register(false)
    };

    const handleLoginFirebase = async () => {
        setLoading(true);
        getConect();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            const result = await signInWithPopup(auth, provider)
            if (result.user && result.user.accessToken) {
                getAlert("Đăng nhập thành công", "success");
                localStorage.setItem('user',JSON.stringify(result.user))

                setTimeout(() => {
                    router.push("/");
                    setLoading(false);
                }, 1500);
                return;
            }
            getAlert(
                "Có lỗi xảy ra trong quá trình đănh nhập vui lòng thử lại",
                "error",
                2000
            );
            setLoading(false);
        } catch (error) {
            getAlert(
                "Có lỗi xảy ra trong quá trình đănh nhập vui lòng thử lại",
                "error",
                2000
            );
            setLoading(false);
        }
    };
    return (

        <main className=" bg-white flex justify-center lg:p-10 py-10"

        >
            <div className="bg-white rounded-lg shadow-lg shadow-slate-400 flex flex-col gap-[30px] lg:px-[60px] p-[20px] m-[16px] lg:py-[20px] w-[100%] lg:w-[600px] h-fit ">
                <div className="flex items-baseline justify-between">
                    <div className="text-[30px] font-normal">Đăng ký tài khoản</div>
                    <Link href={'/login'} className="text-white bg-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/70 duration-150 rounded-md px-4 py-2 active:scale-95">Đăng nhập</Link>
                </div>
                <div>Điền đầy đủ thông tin để hoàn thành đăng ký</div>
                <form
                    className="flex flex-col lg:gap-[30px] gap-[16px] w-full"
                    onSubmit={handle_register}
                >
                    <div
                        className="flex flex-col lg:flex-row items-center gap-4"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                            <label htmlFor="name" >
                                Tên đầy đủ:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                                placeholder="Nhập tên tài khoản..."
                                required
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                            <label htmlFor="email" >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                                placeholder="Nhập tên tài khoản..."
                                required
                            />
                        </div>
                    </div>
                    <div
                        className="flex flex-col lg:flex-row items-center gap-4"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                            <label htmlFor="phone" >
                                Số điện thoại:
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                                placeholder="Nhập tên tài khoản..."
                                required
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                            <label htmlFor="date" >
                                Ngày sinh:
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                                placeholder="Nhập tên tài khoản..."
                                required
                            />
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-4"
                    >
                        <span>Giới tính:</span>
                        <div
                            className="flex items-center gap-2"
                        >
                            <input
                                type="radio"
                                value={'female'} 
                                name="gender"
                                id="gender_women"
                                checked
                            />
                            <label htmlFor="gender_women">Nữ</label>
                        </div>
                        <div
                            className="flex items-center gap-2"
                        >
                            <input 
                                type="radio" 
                                value={'male'}
                                name="gender"
                                id="gender_man"
                            />
                            <label htmlFor="gender_man">Nam</label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                        <label htmlFor="username" className="min-w-[120px]">
                            Tên tài khoản:
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                            placeholder="Nhập tên tài khoản..."
                            required
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                        <label htmlFor="password" className="min-w-[120px]">
                            Mật khẩu:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                            placeholder="Nhập mật khẩu..."
                            required
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                        <label htmlFor="repassword" className="min-w-[120px]">
                            Nhập lại mật khẩu:
                        </label>
                        <input
                            type="password"
                            name="repassword"
                            id="repassword"
                            className="border border-slate-400 w-[100%] flex-1 px-2 py-1 focus-visible:outline-primary rounded-md"
                            placeholder="Nhập lại mật khẩu..."
                            required
                        />
                    </div>
                    <button className="text-white bg-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/70 duration-150 py-2 px-4 rounded-md uppercase font-bold active:scale-95">
                        {
                            loading_register ? 'Loading...' : 'Đăng ký'
                        }
                    </button>
                </form>
                <div className="flex items-center gap-[40px]">
                    <div className="border-t border-slate-300 flex-1"></div>
                    <div className="text-[14px] text-slate-500">
                        Đăng nhập với
                    </div>
                    <div className="border-t border-slate-300 flex-1"></div>
                </div>

                {!loading ? (
                    <button
                        className="text-white bg-orange-500 py-2 px-4 rounded-sm uppercase  flex items-center justify-center gap-4 btn hover:shadow-lg hover:shadow-orange-500/70 "
                        onClick={handleLoginFirebase}
                    >
                        <BsGoogle />
                        <span>đăng nhập với google</span>
                    </button>
                ) : (
                    <div className=" self-center w-[25px] h-[25px] border-[4px] rounded-full border-orange-500 border-r-transparent animate-spin"></div>
                )}

                <div className="text-center text-[12px]">
                    Bạn có địa điểm và mã PIN cho từng địa điểm trên email của
                    bạn. Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng liên hệ
                    <br />{" "}
                    <span className="text-primary underline">
                        {" "}
                        Customer support service.
                    </span>
                </div>
            </div>
        </main>
    );
}

