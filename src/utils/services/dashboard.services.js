import axios from "axios"
import { getToken } from "../helper/localStorage";


const BASE_URL_V1 = 'https://lokjyot-api.onrender.com/api/v1'

const fetchCategories = ()=>{
    return axios({
        method: 'GET',
        url: BASE_URL_V1+'/category'
    })
}

const changeNewsStatus = (id,data)=>{
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1+'/admin/news/change-status/'+id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        data,
    })
}

const postCategory = (data)=>{
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1+'/category',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        data,
    })
}
const postTag = (data)=>{
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1+'/tag',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        data,
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
    changeNewsStatus,
    postCategory,
    postTag
}