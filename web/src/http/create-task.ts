import Cookies from 'js-cookie'

interface CreateTaskRequest {
    content: string,
    userId: string,
}

interface CreateTaskResponse {
    task: {
        content: string,
        userId: string,
        createdAt: string,
        checked: boolean,
        id: string
    }
}

export async function createTask({ content, userId }: CreateTaskRequest) {
    const token = Cookies.get('jwt');

    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/tasks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: content,
            userId,
        }),
    });

    const newTask: CreateTaskResponse = await response.json()

    return newTask

}