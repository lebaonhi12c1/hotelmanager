import React, { memo } from 'react';

const LoadingItem = memo(() => {
    return (
        <div>
             <div
                className='border-[2px] border-primary border-b-transparent w-[80px] h-[80px] rounded-full animate-spin'
            >
            </div>
        </div>
    );
});

LoadingItem.displayName = 'LoadingItem'

export default LoadingItem;