import Infrastructure from '@/components/Infrastructure';
import Position from '@/components/Position';
import React from 'react';
import RoomsListDetail from '@/components/RoomsListDetail';
import Evalute from '@/components/Evalute';


function RoomDetail() {
    return (
        <div className='root-container'>
            <div className='flex gap-4 flex-col center-mobile-element'>
                <RoomsListDetail/>
                <Infrastructure/>
                <Position/>
                <Evalute/>
            </div>
        </div>
    );
}

export default RoomDetail;