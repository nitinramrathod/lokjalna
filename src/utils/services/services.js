import axios from "axios";
import { BASE_URL_V1 } from "./dashboard.services";

async function getNewsDetail(slug) {
    const response = await fetch(`https://lokjyot-api.onrender.com/api/v1/news/${slug}`, {
        method: 'GET',
        cache: 'no-store', // To disable caching (optional)
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
}

async function submitEnquiry(data) {
    return axios({
        method: 'POST',
        url: BASE_URL_V1 + '/submission',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
    })
}

export {
    getNewsDetail,
    submitEnquiry
}