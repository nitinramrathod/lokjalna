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
    const response = await fetch('https://lokjyot-api.onrender.com/api/v1/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    getSingleNews
}