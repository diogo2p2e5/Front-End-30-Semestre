import axios from "axios";

const apiPort = "3000"

const LocalApi = `http://localhost:${apiPort}`

const externalApi = null

const api = axios.create({
    baseURL: LocalApi
})


export default api