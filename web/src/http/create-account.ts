interface CreateAccountRequest {
    name: string,
    email: string,
    password: string
}

export async function createAccount({ name, email, password }: CreateAccountRequest) {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    if (!response.ok) return;

    const { token } = await response.json()

    return token
}