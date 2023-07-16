import { createContext, useState } from "react";
import { format } from "date-fns";

export const filterContext = createContext()

const FilterContext = ({ children }) =>
{
    const [filter, setFilter] = useState(
        {
            startDate: format(new Date(), 'yyyy-MM-dd'),
            endDate: format(new Date().setDate((new Date().getDate() +1)), 'yyyy-MM-dd'),
            adult: 2,
            child: 0,
        }
    )
    return (
        <filterContext.Provider
            value={
                {
                    filter,
                    setFilter,
                }
            }
        >
            { children }
        </filterContext.Provider>
    )
}

export default FilterContext