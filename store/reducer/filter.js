
import { createSlice } from "@reduxjs/toolkit"
import { format } from "date-fns"

const filterReducer = createSlice({
    name: 'filter',
    initialState: 
    {
        startDate: format(new Date(),'yyyy-MM-dd'),
        endDate:  format(new Date(),'yyyy-MM-dd'),
        adult: 2,
        child: 0
    },
    reducers: 
{
        setStartDate: (state,{payload}) =>
        {
            return {
                ...state,
                startDate: payload
            }       
        },
        setEndDate: (state,{payload}) =>
        {
            return {
                ...state,
                endDate: payload
            }    
        },
        setPersonRoom: (state,{payload}) =>
        {  
            return {
                ...state,
                adult: payload.adult,
                child: payload.child
            }
        },
    }
})
export const {setPersonRoom, setEndDate, setStartDate} = filterReducer.actions
export const filterSelect = state => state.filter
export default filterReducer.reducer





