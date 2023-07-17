
import { createContext, useState } from "react";

export const roomContext = createContext();

const RoomContext = ({children}) =>
{
    const [ room, set_room_info ] = useState(null)

    return (
        <roomContext.Provider
            value={
                {
                    room,
                    set_room_info
                }
            }
        >
            {children}
        </roomContext.Provider>
    )
}



export default RoomContext