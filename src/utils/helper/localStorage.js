const saveToken = (token) => {
    if (typeof window !== "undefined") {
    localStorage.setItem('jwtToken', token);
    }
};
const saveUser = (userInfo) => {
    const stringUser = JSON.stringify(userInfo)
    if (typeof window !== "undefined") {
    localStorage.setItem('user', stringUser);
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
    clearToken,
    saveUser
}