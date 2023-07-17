import { CREATE_COMMENT } from '@/api_variables';
import { check_empty } from '@/hooks';
import { post_data } from '@/hooks/api';
import { getToastError, getToastSuccess } from '@/hooks/toast';
import React, { memo, useState } from 'react';
import { BsStar, BsFillStarFill } from 'react-icons/bs' 
const ControlReview = memo(( { is_open }) => {
    const [ comment, set_comment ] = useState( null )
    const [ star, set_star ] = useState( 5 )
    const handle_submit = async() =>
    {


        if( !localStorage.getItem( 'user' ) )
        {
            getToastError( 'Bạn phải đăng nhập để tham gia đánh giá')
            return
        }
        
        if( check_empty( comment ) )
        {
            getToastError( 'Hãy thử viết gì đó để đánh giả' )
            return
        }
        
        const res = await post_data( 
            CREATE_COMMENT,
            {
                customer: JSON.parse( localStorage.getItem( 'user' ) ).id,
                rating: star + 1,
                comment: comment
            }
        )

        if( !res.success )
        {
            getToastError( res.message )
            return
        }
        getToastSuccess( 'Cảm ơn bạn đã để lại đánh giá cho dịch vụ của chúng tôi')
    }
    return (
        is_open && 
        <div 
            className='flex items-center flex-col gap-4 w-full'
        >
            <div
                className='flex items-center gap-2'
            >
                {
                    Array( 5 ).fill().map(
                        ( item, index ) => 
                        {
                            return(
                                <div 
                                    className=" text-[20px] cursor-pointer hover:scale-125 hover:shadow-lg hover:shadow-yellow-400/70 duration-200 rounded-full active:scale-95"
                                    key={ index }
                                    onClick={
                                        () => set_star( index )
                                    }
                                >
                                    {
                                        index <= star ? ( <BsFillStarFill className='text-yellow-400'/> ) : ( <BsStar/> )
                                    }
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div
                className='flex items-center justify-between gap-4 w-full'
            >
                <input
                
                  type="text"
                  placeholder="Nhập đánh giá của bạn..."
                  className="w-[300px] border flex-1 border-slate-200 rounded-lg py-2 px-4 outline-none  bg-transparent focus-visible:outline-primary focus-within:border-white"
                  onChange={
                    e => set_comment( e.target.value )
                  }
                />
                <button className="inline-flex items-center gap-2 justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-red-color hover:scale-105 hover:shadow-lg hover:shadow-red-color/70 duration-200 rounded-lg"
                
                  onClick={
                    handle_submit
                  }
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                  <span>Đăng đánh giá</span>
                </button>
            </div>
        </div>
    );
});

ControlReview.displayName = 'ControlReview'
export default ControlReview;