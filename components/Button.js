import React, { memo } from 'react';

const Button = memo(( { heading, type, handler } ) => {
    const get_style = () =>
    {
        switch ( type ) {
            case 'success':
                return 'bg-green-color text-white hover:shadow-green/70';
            case 'danger':
                return 'bg-red-color text-white hover:shadow-red-color/70'
            case 'primary':
                return 'bg-primary text-white hover:shadow-primary/70'
            default:
                break;
        }
    }
    return (
        <div
            className={`w-fit py-1 px-4 rounded-md flex shadow-lg cursor-pointer items-center justify-center hover:scale-105 active:scale-95 duration-200 ${get_style()}`}
            onClick={ handler }
        >
            {
                heading
            }
        </div>
    );
});

Button.displayName = 'Button'

export default Button;