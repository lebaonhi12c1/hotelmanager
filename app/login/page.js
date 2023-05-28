"use client";
import Image from "next/image";
import { BsGoogle, BsFacebook } from "react-icons/bs";

export default async function Login() {
    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value)
    };
    return (
        <main className="">
            <div className="flex items-center justify-center fixed inset-0 bg-slate-200 p-[16px]">
                <div className="bg-white rounded-sm shadow-lg shadow-slate-400 flex flex-col gap-[30px] lg:px-[60px] p-[20px] m-[16px] lg:py-[20px] w-[100%] lg:w-[600px] h-fit ">
                    <div className="text-[30px] font-normal">Login</div>
                    <div>Please enter username and password to login</div>
                    <form
                        className="flex flex-col lg:gap-[30px] gap-[16px] w-full"
                        onSubmit={handleLogin}
                    >
                        <div className="flex items-center gap-4 w-full">
                            <label htmlFor="username" className="min-w-[100px]">
                                Username:
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="border border-slate-400 rounded-sm w-[100%] flex-1 p-1 focus-visible:outline-primary"
                                placeholder="username..."
                                required
                            />
                        </div>
                        <div className="flex items-center gap-4 w-full">
                            <label htmlFor="password" className="min-w-[100px]">
                                Password:
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="border border-slate-400 rounded-sm w-[100%] flex-1 p-1 focus-visible:outline-primary"
                                placeholder="password..."
                                required
                            />
                        </div>
                        <button className="text-white bg-primary py-2 px-4 rounded-sm uppercase font-bold">
                            Login
                        </button>
                    </form>
                    <div className="flex items-center gap-[40px]">
                        <div className="border-t border-slate-300 flex-1"></div>
                        <div className="text-[14px] text-slate-500">
                            Login with
                        </div>
                        <div className="border-t border-slate-300 flex-1"></div>
                    </div>
                    <button className="text-white bg-orange-500 py-2 px-4 rounded-sm uppercase  flex items-center justify-center gap-4 btn hover:shadow-lg hover:shadow-orange-500/70 ">
                        <BsGoogle />
                        <span>Login with google</span>
                    </button>
                    <button className="text-white bg-blue-600 py-2 px-4 rounded-sm uppercase flex items-center justify-center gap-4 btn hover:shadow-lg hover:shadow-blue-500/70">
                        <BsFacebook />
                        <span>Login with facebook</span>
                    </button>
                    <div className="text-center text-[12px]">
                        You have the place place and PIN code for each time
                        place on email of your. If you have any other questions,
                        feel free to contact
                        <br />{" "}
                        <span className="text-primary underline">
                            {" "}
                            Customer support service.
                        </span>
                    </div>
                </div>
                <Image
                    src={
                        "https://img.freepik.com/free-photo/women-using-digital-devices_53876-23469.jpg?w=996&t=st=1684941747~exp=1684942347~hmac=11aa842e477705b4dc9cefa43b471adb3ee6b7111372783c7e4b00c46cb8dc84"
                    }
                    fill={true}
                    className="object-contain brightness-75 -z-10"
                    alt="login-background"
                    loading="lazy"
                />
                <div
                    className=" absolute inset-0 bg-black/70 -z-20"
                >
                </div>
            </div>
        </main>
    );
}
