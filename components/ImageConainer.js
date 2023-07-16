import Image from 'next/image';
import React, { memo } from 'react';

const ImageConainer = memo(({value, width, height, object_fit}) => {
    return (
        <div 
            className={`relative ${width ? `w-[${width}px]` : 'w-full'} ${height ? `h-[${height}px]` : 'h-full'}`}
        >
            <Image
                src={value || 'https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=1060&t=st=1689083605~exp=1689084205~hmac=57c95791ec97524f3acf225ef2c2c3bd5ec9c977aa1d9ddfc64f84ce9be45e7a'}
                alt='image-container'
                fill
                loading='lazy'
                className={ object_fit || 'object-cover' }
            />
        </div>
    );
});

ImageConainer.displayName = 'ImageConainer'

export default ImageConainer;