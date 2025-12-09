import { createContext } from "react"; 
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
    
    
    const [auth, setAuth] = useLocalStorage('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result); 
        navigate('/');
    };

    const registerSubmitHandler = async (values) => {
        
        if (values.password !== values.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const result = await authService.register(values.email, values.password);

        setAuth(result); 
        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({}); 
        localStorage.removeItem('auth'); 
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