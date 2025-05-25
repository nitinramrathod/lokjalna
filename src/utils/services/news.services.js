import axios from "axios";
import { getToken } from "../helper/localStorage";
const BASE_URL_V1 = 'https://lokjyot-api.onrender.com/api/v1'


async function getNews(params = {}) {
  const baseUrl = 'https://lokjyot-api.onrender.com/api/v1/news';
  const url = new URL(baseUrl);

  // Append query parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value);
    }
  });

  const response = await fetch(url.toString(), {
    method: 'GET',
    cache: 'no-store', // Disable caching (optional)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
}
async function adminGetNews(params={}) {
  const token = getToken();

  return axios({
    method: 'GET',
    url: BASE_URL_V1 + '/admin/news',
    params,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}
async function adminGetArticles() {
  const token = getToken();

  return axios({
    method: 'GET',
    url: BASE_URL_V1 + '/admin/news',
    params: {type: 'article'},

    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}

async function getSingleNews(slug) {
  const response = await fetch(`https://lokjyot-api.onrender.com/api/v1/news/${slug}`, {
    method: 'GET',
    cache: 'no-store', // To disable caching (optional)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
}

async function postNews(data) {
  const token = getToken();

  return axios({
    method: 'POST',
    url: BASE_URL_V1 + '/admin/news',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}
async function updateNews(data, id) {
  const token = getToken();

  return axios({
    method: 'PUT',
    url: BASE_URL_V1 + '/admin/news/'+id,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}

async function deleteNews(id) {
  const token = getToken();
  const response = await fetch(`${BASE_URL_V1}/admin/news/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
}

export {
  getNews,
  postNews,
  getSingleNews,
  updateNews,
  deleteNews,
  adminGetNews,
  adminGetArticles
}
