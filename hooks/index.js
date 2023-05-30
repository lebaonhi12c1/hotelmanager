import { useState, useEffect } from "react";

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

export {useReponsive}
