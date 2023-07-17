import React, { memo } from 'react';
import CardComent from './CardComent';
import useSWR from 'swr'
import { CREATE_COMMENT } from '@/api_variables';
import { get_data } from '@/hooks/api';
import LoadingItem from './LoadingItem';
const ListComent = memo(() => {
    
    const { data, isLoading } = useSWR(
        CREATE_COMMENT,
        get_data
    )

    return (
        <div
            className='flex flex-col gap-4 max-h-[300px] overflow-auto w-full'
        >
            {
                isLoading ?
                (
                   <div
                        className='p-4 flex justify-center w-full' 
                   > 
                        <LoadingItem/>
                    </div>
                ) :
                (
                    data.map(
                        ( item, index ) =>
                        {
                            return(
                                <CardComent
                                    value = { item }
                                    key = { index }
                                />
                            )
                        }
                    )
                )
            }
        </div>
    );
});

ListComent.displayName = 'ListComent'
export default ListComent;