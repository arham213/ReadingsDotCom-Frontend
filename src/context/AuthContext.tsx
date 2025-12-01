import { createContext, useContext, useEffect, useState } from "react";
import { AuthState, StoredUser } from "../types/auth";

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<StoredUser | null>(null);

    //Load user from localStorage
    useEffect(() => {
        console.log('loading user from localstorage');
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, [])

    const login = (userData: StoredUser) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error("useAuth must be used inside AuthProvider")
    return authContext;
}