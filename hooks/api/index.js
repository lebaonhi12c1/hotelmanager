const { check_empty, getAlert } = require("..")

const get_data = async (url) =>
{
    try {
        const res = await fetch(url)
        const data = await res.json()
        if(check_empty(data))
        {
            getToastError()
            return
        }

        if(data.status !== 200)
        {
            getToastError()
            return
        }

        return data.data

    } catch (error) {
        getToastError('Server đang bảo trì')
    }
}

const post_data = async (url, payload) =>
{
    try {
        const res = await fetch(
            url,
            {
                method: 'post',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        )
        
        const data = await res.json()
        return data
        
    } catch (error) {
        getAlert()
        return false
    }
}


export {get_data, post_data}