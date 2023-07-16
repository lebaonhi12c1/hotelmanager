'use client'

import ImageConainer from '@/components/ImageConainer';
import { userContext } from '@/context/user';
import React, { useContext } from 'react';
function Profile(props) {
    const { user } = useContext( userContext )

    return (
        <div
            className='root-container'
        >
            <div
                className='grid grid-cols-1 lg:grid-cols-3 gap-4'
            >
                <div
                    className='bg-white rounded-lg p-4'
                >
                    <ImageConainer
                        value =  { user?.photoURL }
                        height = { 300 }
                    />
                </div>
                <div
                    className='bg-white rounded-lg p-4 col-span-2'
                >
                    <div
                        className='p-4 bg-slate-100 rounded-lg flex flex-col gap-2'
                    >
                        <div>
                            Tên: <strong> { user?.displayName }</strong>
                        </div>
                        <div>
                            Email: <strong> { user?.email }</strong>
                        </div>
                        <div>
                            Số điện thoại: <strong> { user?.phone }</strong>
                        </div>
                        <div>
                            Giới tính: <strong> { user?.genter === 'female' ? 'Nữ' : 'Nam' }</strong>
                        </div>
                        <div>
                            Tên tài khoản: <strong> { user?.username }</strong>
                        </div>
                        <div>
                            Mật khẩu: <strong> ********** </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;