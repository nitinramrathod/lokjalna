const saveToken = (token) => {
    if (typeof window !== "undefined") {
    localStorage.setItem('jwtToken', token);
    }
};

const getToken = () => {
    if (typeof window !== "undefined") {
    return localStorage.getItem('jwtToken');
    }
};

const clearToken = () => {
    if (typeof window !== "undefined") {
    return localStorage.removeItem('jwtToken');
    }
};

export {
    saveToken,
    getToken,
    clearToken
}