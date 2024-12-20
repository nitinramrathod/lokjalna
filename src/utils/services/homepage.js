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

export {
    getNews
}