import { configureStore } from "@reduxjs/toolkit"

import user from './reducer/user'
import room from "./reducer/room"
import filter from "./reducer/filter"
import payment from "./reducer/payment"
const store = configureStore({
    reducer:{
        user,
        room,
        filter,
        payment
    },
})


export default store