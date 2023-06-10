import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
const useReponsive = () => {
    const [reponsive, setReponsive] = useState(false);
    useEffect(() => {
        const handleReponsiveDefautl = () => {
            window.innerWidth < 764 ? setReponsive(true) : setReponsive(false);
        };

        const handleReponsive = () => {
            window.innerWidth < 764 ? setReponsive(true) : setReponsive(false);
        };

        handleReponsiveDefautl();

        window.addEventListener("resize", handleReponsive);
        return () => {
            window.removeEventListener("resize", handleReponsive);
            handleReponsiveDefautl();
        };
    }, []);
    return reponsive;
};


const getAlert = (message,type, time=1500, isButton = false) =>
{
    Swal.fire(
        {
            icon: type,
            title: message,
            showConfirmButton: isButton,
            timer: time
        }
    )
}

export {useReponsive, getAlert}
