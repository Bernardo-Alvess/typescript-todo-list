interface loginRequest {
    email: string,
    password: string
}

export const loginUser = async ({ email, password }: loginRequest) => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    if (!response.ok) return;

    const { token } = await response.json()

    return token
}