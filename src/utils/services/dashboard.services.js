import axios from "axios"

const BASE_URL_V1 = 'https://lokjyot-api.onrender.com/api/v1'

const fetchCategories = ()=>{
    return axios({
        method: 'GET',
        url: BASE_URL_V1+'/category'
    })
}
const fetchTags = ()=>{
    return axios({
        method: 'GET',
        url: BASE_URL_V1+'/tag'
    })
}
const fetchUser = ()=>{
    return axios({
        method: 'GET',
        url: BASE_URL_V1+'/user'
    })
}

export{
    fetchCategories,
    fetchTags,
    fetchUser,
}