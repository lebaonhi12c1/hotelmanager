import React from 'react';

async function LoadingLogin(props) {
    return (
        <div
            className='flex items-center justify-center fixed inset-0 bg-white/70'
        >
            <div 
                className=' w-[90%] h-[300px] lg:w-[400px] flex items-center justify-center rounded-sm'
            >
                <div
                    className='border-[2px] border-primary border-b-transparent w-[80px] h-[80px] rounded-full animate-spin'
                >
                    
                </div>
            </div>
        </div>
    );
}

export default LoadingLogin;