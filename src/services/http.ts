import axios, { AxiosInstance } from "axios";


function createAxios() : AxiosInstance{
    return axios.create({
        withCredentials: false,
        
    })
}

const httpInstance = createAxios()


export default httpInstance