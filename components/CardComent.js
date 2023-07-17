import React from 'react';
import ImageConainer from './ImageConainer';
import { BsStarFill } from 'react-icons/bs';
function CardComent( { value } ) {
    return (
        <div
            className=' flex flex-col gap-4 lg:flex-row border-b py-2'
        >
            <div
                className='rounded-full overflow-hidden w-[50px] h-[50px]'
            >
                <ImageConainer
                    value = { value?.Customer?.image }
                />
            </div>
            <div
                className='flex flex-col gap-4'
            >
                <div
                    className='flex items-center gap-4'
                >
                    <div className=' font-medium'>
                        { value?.Customer?.name || 'Loading...' }
                    </div>
                    <div className='flex items-center gap-2'>
                        {
                            Array(Number(value?.rating)).fill().map(
                                ( item, index ) =>
                                {
                                    return (
                                        <BsStarFill className='text-yellow-400' key={ index }/>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div
                    className='text-slate-500 italic'
                >
                    { value?.comment || 'Loading...' }
                </div>
            </div>
        </div>
    );
}

export default CardComent;