import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
    };

    const registerSubmitHandler = async (values) => {
        // 1. Проверка дали паролите съвпадат
        if (values.password !== values.confirmPassword) {
            alert("Passwords don't match!");
            return; // Спираме изпълнението дотук
        }

        try {
            // 2. Опитваме да регистрираме потребителя
            const result = await authService.register(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/');
        } catch (error) {
            // 3. Ако сървърът върне грешка (напр. "User already exists")
            console.log("Register error:", error);
            alert(error.message || "Registration failed! Check if email is already taken.");
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;