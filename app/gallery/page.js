import ImageConainer from '@/components/ImageConainer';
import { images } from '@/data';
import React from 'react';
import { uid } from 'uid';

function Gallery(props) {
    return (
        <div
            className='root-container'
       >
            <div
                className='grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-lg bg-white p-4 center-mobile-element'
            >
                {
                    images.map(
                        item =>
                        {
                            return (
                                <div 
                                    className=' rounded-lg overflow-hidden'
                                    key={ uid( 10 ) }
                                >
                                    <ImageConainer
                                        value = { item.value }
                                        height = { 300 }
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
            {/* <div
                className='bg-white rounded-lg p-4 text-center text-red-color italic text-[24px]'
            >
                Bộ sư tập không có ảnh 
            </div> */}
       </div>
    );
}

export default Gallery;