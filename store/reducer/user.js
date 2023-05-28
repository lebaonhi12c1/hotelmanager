
import { createSlice } from "@reduxjs/toolkit"


const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state,{payload}) =>
        {
            state = payload
        }
    }
})
export const { loginWidthPassword} = userReducer.actions
export const userSelect = state => state.user
export default userReducer.reducer