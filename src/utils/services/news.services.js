import axios from "axios";
import { getToken } from "../helper/localStorage";
const BASE_URL_V1 = 'https://lokjyot-api.onrender.com/api/v1'


async function getNews() {
  const response = await fetch('https://lokjyot-api.onrender.com/api/v1/news', {
    method: 'GET',
    cache: 'no-store', // To disable caching (optional)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
}
async function adminGetNews() {
  const token = getToken();

  return axios({
    method: 'GET',
    url: BASE_URL_V1 + '/admin/news',

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}
async function adminGetArticles() {
  const token = getToken();

  return axios({
    method: 'GET',
    url: BASE_URL_V1 + '/admin/articles',

    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',

  })
}
async function updateNews(data, id) {
  const token = getToken();
  try {
    const response = await axios.put(
      `https://lokjyot-api.onrender.com/api/v1/admin/news/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Failed to post data: ${error.response?.statusText || error.message}`);
  }
}
async function deleteNews(id) {
  const token = getToken();
  const response = await fetch(`${BASE_URL_V1}/admin/news/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
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
