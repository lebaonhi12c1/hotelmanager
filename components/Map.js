import React, { memo } from 'react';
import Button from './Button';

const Map = memo(( { handleClose, is_open }) => {
    return (
        is_open && 
        <div
            className='fixed items-center flex-col gap-y-4 lg:gap-4 justify-center inset-0 flex bg-black/40 z-[100]'
        >
             <div
                className='bg-white flex items-center flex-col gap-4 rounded-lg overflow-hidden p-4 w-5/6 h-5/6'
             >
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.932134291629!2d106.67558947469652!3d10.73971398940684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fac96e4c9bf%3A0xa2bdf67b41f7a794!2zxJAuIENhbyBM4buXLCBwaMaw4budbmcgNCwgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1685713580714!5m2!1svi!2s"
                    className="w-full h-full"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <Button
                    heading = 'Thoát'
                    type = 'danger'
                    handler = { () => handleClose( false ) }
                />
             </div>
        </div>
    );
});
Map.displayName = 'Map'
export default Map;