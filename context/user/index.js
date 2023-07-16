
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContext = ({children}) =>
{
    const [user, set_user] = useState(null)
    useEffect(() =>
    {
        const set_user_info = () =>
        {
            if(localStorage.getItem('user'))
            {
                set_user(JSON.parse(localStorage.getItem('user')))
                return
            }
        }
        set_user_info()
    },[])

    const set_user_info = value =>
    {
        set_user(value)
    }

    return (
        <userContext.Provider
            value={
                {
                    user,
                    set_user_info
                }
            }
        >
            {children}
        </userContext.Provider>
    )
}



export default UserContext