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


const getAlert = (message = 'Có lỗi xảy ra trong quá trình thực hiện',type = 'error', time=1500, isButton = false) =>
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

const getFormatPrice = value =>
{

    if(check_empty(value))
    {
        return 0 + ' VND'
    }
    return Number(value).toLocaleString('en-US') + ' VND'
}

const check_empty = value =>
{
    // Kiểm tra giá trị null hoặc undefined
    if (value === null || typeof value === 'undefined') {
        return true;
    }

    // Kiểm tra chuỗi rỗng
    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }

    // Kiểm tra mảng rỗng
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    // Kiểm tra đối tượng rỗng
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}


/*Hàm tính khoảng cách giữa 2 ngày trong javascript*/
const get_day_of_time = (d1, d2) => {
    const date2 = new Date(d2)
    const date1 = new Date(d1)
    let ms1 = date1.getTime();
    let ms2 = date2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};


function formatDateStringToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  function formatDate(dateString) {

    const date = new Date(dateString);
    if( !(date instanceof Date && !isNaN(date)))
    {
        return 'Chưa có'
    }
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  }
  
  function isDateInRange(dateString, daysBefore) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
    const beforeDate = new Date(targetDate.getTime() - daysBefore * 24 * 60 * 60 * 1000);
  
    // Kiểm tra xem ngày hôm nay có lớn hơn trước 2 ngày của ngày mục tiêu không
    const isInRange = currentDate >= beforeDate;
  
    return isInRange;
  }
export {useReponsive, getAlert, getFormatPrice, check_empty, get_day_of_time, formatDateStringToDDMMYYYY, formatDate, isDateInRange}
