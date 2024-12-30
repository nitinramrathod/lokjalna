import { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null); // Initialize with null for clarity

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return user; 
};

export default useAuth;