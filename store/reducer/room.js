
import { createSlice } from "@reduxjs/toolkit"


const roomReducer = createSlice({
    name: 'room',
    initialState: 
    {
        room: null,
        isShow: false,
    },
    reducers: 
    {
        setIsShowOn: state =>
        {
            state.isShow = true
        },
        setIsShowOff: state =>
        {
            state.isShow = false
        },
        setRoom: (state,{payload}) =>
        {
            state.room = payload
        }

    }
})
export const { setRoom, setIsShowOff, setIsShowOn } = roomReducer.actions
export const roomSelect = state => state.room
export default roomReducer.reducer