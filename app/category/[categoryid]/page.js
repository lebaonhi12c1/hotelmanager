import Evalute from '@/components/Evalute';
import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import RoomsListDetail from '@/components/RoomsListDetail';
import React from 'react';

function Category(props) {
    
    return (
        <div className='root-container flex flex-col gap-4'>
           <div className='bg-white py-4'>
                <div className='px-4 text-[24px] font-semibold'>
                    Loại phòng : loại phòng 1
                </div>
                <div>
                    <RoomsListDetail/>
                </div>
           </div>
           <Infrastructure/>
           <Position/>
           <Evalute/>
        </div>
    );
}

export default Category;