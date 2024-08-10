import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'http://localhost:7173/auth'
    }
)

export const googleAuth = (code) => api.get(`/google?code=${code}`)