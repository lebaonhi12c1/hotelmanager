

import { GET_RATING } from "@/api_variables";
import { get_data } from "@/hooks/api";
import { createContext, useEffect, useState } from "react";

export const ratingContext = createContext()

const RatingContext = ( { children }) =>
{
    const [ rating, set_rating ] = useState( 10 )
    const getRating = async() =>
    {
        const res = await get_data( 
            GET_RATING
        )
        set_rating( res.toFixed(1) )
    }

    useEffect(
        () =>
        {
            getRating()
        },
        []
    )

    return (
        <ratingContext.Provider
            value =
            {
                rating
            }
        >
            { children }
        </ratingContext.Provider>
    )
}

export default RatingContext