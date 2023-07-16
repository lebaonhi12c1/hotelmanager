
import {toast} from 'react-toastify'

const getToastError = (message = 'Có sự có trong quá trình lấy dữ liệu', time = 2500) =>
{
    toast.error(
        message,
        {
            position: "top-right",
            autoClose: time
        }
    )
}

const getToastSuccess = (message = 'Thực hiện thành công', time = 2500) =>
{
    toast.success(
        message,
        {
            position: "top-right",
            autoClose: time
        }
    )
}



export { getToastError, getToastSuccess }