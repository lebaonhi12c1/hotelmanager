
import { createSlice } from "@reduxjs/toolkit"


const userReducer = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state,{payload}) =>
        {
            return payload
        },
        clearUser: state =>
        {
            
            localStorage.clear()
            return null
        }
    }
})
export const { setUser, clearUser} = userReducer.actions
export const userSelect = state => state.user
export default userReducer.reducer