import axios from "axios";
import { BASE_URL_V1 } from "./dashboard.services";

async function getLogin(data) {

    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/login',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
    })
}
export {
    getLogin
}