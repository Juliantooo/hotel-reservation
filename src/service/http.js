import axios from 'axios';

const http = axios.create({
    baseURL: 'https://priceline-com-provider.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        'x-rapidapi-key': '5526512f05msh9e1f02901c135f9p1f560bjsnee0037821810'
    }
})



const parseResponse = (response) => {
    return {
        data: response.data
    }
}

http.interceptors.response.use((response) => {
    return parseResponse(response)
}, (error) => {
    return Promise.reject(error)
})

export default http;