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

    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify({
            content,
            userId
        })
    })

    const data: CreateTaskResponse = await response.json()

    return { task: data.task }

}