import axios from "axios"
import { getToken } from "../helper/localStorage";


export const BASE_URL_V1 = 'https://lokjyot-api.onrender.com/api/v1'

const fetchCategories = () => {
    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/category'
    })
}

const changeNewsStatus = (id, data) => {
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/admin/news/change-status/' + id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        data,
    })
}

const postCategory = (data) => {
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/category',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        data,
    })
}
const postTag = (data) => {
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/tag',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        data,
    })
}
const postUser = (data) => {
    const token = getToken();

    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/user',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        data,
    })
}
const updateUser = (data, id) => {
    const token = getToken();

    return axios({
        method: 'PUT',
        url: BASE_URL_V1 + '/user/'+id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        data,
    })
}
const getUserDetail = (id) => {
    const token = getToken();

    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/user/'+id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        }
    })
}
const deleteTag = (id) => {
    const token = getToken();

    return axios({
        method: 'DELETE',
        url: BASE_URL_V1 + '/tag/' + id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    })
}
const deleteSubmission = (id) => {
    const token = getToken();
    return axios({
        method: 'DELETE',
        url: BASE_URL_V1 + '/submission/' + id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    })
}
const deleteUser = (id) => {
    const token = getToken();

    return axios({
        method: 'DELETE',
        url: BASE_URL_V1 + '/user/' + id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    })
}
const deleteCategory = (id) => {
    const token = getToken();

    return axios({
        method: 'DELETE',
        url: BASE_URL_V1 + '/category/' + id,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    })
}
const fetchTags = () => {
    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/tag'
    })
}
const fetchSubmissions = () => {
    const token = getToken();

    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/submission',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    })
}
const fetchUsers = () => {
    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/user'
    })
}
const fetchStats = () => {
    const token = getToken();

    return axios({
        method: 'GET',
        url: BASE_URL_V1 + '/dashboard/stats',
         headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export {
    fetchCategories,
    fetchTags,
    fetchStats,
    changeNewsStatus,
    postCategory,
    postTag,
    deleteTag,
    deleteCategory,
    fetchUsers,
    postUser,
    getUserDetail,
    deleteUser,
    fetchSubmissions,
    deleteSubmission,
    updateUser
}