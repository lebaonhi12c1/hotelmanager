'use client'

import { cartContext } from '@/context/cart';
import { getFormatPrice } from '@/hooks';
import React, { memo, useContext } from 'react';
import ImageConainer from './ImageConainer';

const Ads = memo(() => {
    const { total } = useContext(cartContext)
    return (
        <div
            className='flex flex-col gap-4 w-full'
        >
           {/* {
                total > 0 && 
                (
                    <div
                        className='bg-white rounded-lg p-4 flex items-center gap-4 border-red-color border shadow-lg shadow-red-color/70'            
                    >
                        <div>
                            Thành tiền:
                        </div>
                        <div
                            className='text-red-color text-[16px] font-medium'
                        >
                            { getFormatPrice( total ) }
                        </div>
                    </div>
                )
           } */}
           <div
                className='flex flex-col gap-2 bg-white rounded-lg p-4'
           >
                <ImageConainer
                    value = 'https://img.freepik.com/free-vector/flat-furniture-sale-banner-with-photo_23-2148926479.jpg?w=740&t=st=1689341954~exp=1689342554~hmac=d244981589ef016f1a1c0dce8900ae3b37c42273660f0d88c62dca9cd59370d1'
                    height = { 200 }
                    object_fit = 'object-contain'
                />
                <ImageConainer
                    value = 'https://img.freepik.com/free-vector/flat-furniture-sale-banner-with-photo_23-2148926482.jpg?w=740&t=st=1689341870~exp=1689342470~hmac=4d44e4150234a5102b21ba89dbc4524e5b6630dfb8f87c4b1252514bc26a0da0'
                    height = { 200 }
                    object_fit = 'object-contain'
                />
                <ImageConainer
                    value = 'https://img.freepik.com/free-vector/furniture-sale-banners-template_23-2148691015.jpg?w=740&t=st=1689342429~exp=1689343029~hmac=f5099bf17d23b79f08f2859b39865afa9b019f3a70423fdcfda9860e67c10a73'
                    height = { 200 }
                    object_fit = 'object-contain'
                />
                
           </div>
        </div>
    );
});

Ads.displayName = 'Ads'

export default Ads;