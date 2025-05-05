const backendURL ='https://lokjyot-api.onrender.com';

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

export {
    getNewsDetail,
    backendURL
}