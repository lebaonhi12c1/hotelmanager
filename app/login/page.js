"use client";
import { BsGoogle} from "react-icons/bs";

export default async function Login() {
    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value)
    };
    return (
        <main className=" bg-white flex justify-center lg:p-10 py-10">
            <div className="bg-white rounded-sm shadow-lg shadow-slate-400 flex flex-col gap-[30px] lg:px-[60px] p-[20px] m-[16px] lg:py-[20px] w-[100%] lg:w-[600px] h-fit ">
                <div className="text-[30px] font-normal">Đăng nhập</div>
                <div>Hãy nhập tài khoản và mật khẩu để đăng nhập</div>
                <form
                    className="flex flex-col lg:gap-[30px] gap-[16px] w-full"
                    onSubmit={handleLogin}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                        <label htmlFor="username" className="min-w-[120px]">
                            Tên tài khoản:
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
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
                        <label htmlFor="password" className="min-w-[120px]">
                            Mật khẩu:
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
                        Đăng nhập
                    </button>
                </form>
                <div className="flex items-center gap-[40px]">
                    <div className="border-t border-slate-300 flex-1"></div>
                    <div className="text-[14px] text-slate-500">Đăng nhập với</div>
                    <div className="border-t border-slate-300 flex-1"></div>
                </div>
                <button className="text-white bg-orange-500 py-2 px-4 rounded-sm uppercase  flex items-center justify-center gap-4 btn hover:shadow-lg hover:shadow-orange-500/70 ">
                    <BsGoogle />
                    <span>đăng nhập với google</span>
                </button>

                <div className="text-center text-[12px]">
                    Bạn có địa điểm và mã PIN cho từng địa điểm trên email của bạn. Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng liên hệ
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
