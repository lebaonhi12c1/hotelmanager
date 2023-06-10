import { configureStore } from "@reduxjs/toolkit"

import user from './reducer/user'
import room from "./reducer/room"
import filter from "./reducer/filter"
const store = configureStore({
    reducer:{
        user,
        room,
        filter,
    },
})


export default store