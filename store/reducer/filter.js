
import { getAlert } from "@/hooks"
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
            if(new Date(state.endDate) < new Date(payload))
            {
                getAlert('Ngày bạn chọn không họp lệ', 'error')
                return state
            }
            return {
                ...state,
                startDate: payload
            }       
        },
        setEndDate: (state,{payload}) =>
        {
            if(new Date(state.startDate) > new Date(payload))
            {
                getAlert('Ngày bạn chọn không họp lệ', 'error')
                return state
            }
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





