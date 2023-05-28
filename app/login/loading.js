import React from 'react';

async function LoadingLogin(props) {
    return (
        <div
            className='flex items-center justify-center fixed inset-0 bg-black/70'
        >
            <div 
                className='bg-white w-[90%] h-[300px] lg:w-[400px] flex items-center justify-center rounded-sm'
            >
                Loading....
            </div>
        </div>
    );
}

export default LoadingLogin;