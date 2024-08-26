import Cookies from 'js-cookie'
import { getUserIdFromToken } from '../util/get-user-id-from-token';

export const getTasks = async () => {
    const token = Cookies.get('jwt')
    const id = getUserIdFromToken();

    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/tasks/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer: ${token}`,
            'Content-Type': 'application/json'
        },

    })

    console.log(response)

    const data = await response.json()

    return data.tasks
}