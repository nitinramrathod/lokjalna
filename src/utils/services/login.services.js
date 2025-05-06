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

    // try {
    //     const response = await fetch('https://lokjyot-api.onrender.com/api/v1/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         body: data,
    //         cache: 'no-store',
    //     });

    //     // Check if the response status is not OK (e.g., 422)
    //     if (!response.ok) {
    //         const errorDetails = await response.json(); // Parse error details from response
    //         throw errorDetails;
    //     }

    //     return response.json();
    // } catch (error) {
    //     throw error; // Re-throw the error to be handled in the calling function
    // }
}
export {
    getLogin
}