
import { createSlice } from "@reduxjs/toolkit"


const payment_reducer = createSlice({
    name: 'payment',
    initialState: 
    {
        username: '',
        email: '',
        phone: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        order: '',
    },
    reducers: 
    {
        set_info_payment: (state, {payload}) =>
        {
            state = payload
        }
    }
})
export const { set_info_payment } = payment_reducer.actions
export const roomSelect = state => state.payment
export default payment_reducer.reducer