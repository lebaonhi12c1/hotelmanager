import { configureStore } from "@reduxjs/toolkit"

import user from './reducer/user'
import room from "./reducer/room"
const store = configureStore({
    reducer:{
        user,
        room,
    },
})


export default store