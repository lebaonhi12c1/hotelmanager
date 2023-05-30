import React from 'react';
import { memo } from 'react';

function CardSliderInfrastructure({Icon,name}) {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-[24px]'>
                <Icon/>
            </div>
            <div className=''>
                {name}
            </div>
        </div>
    );
}

export default memo(CardSliderInfrastructure);