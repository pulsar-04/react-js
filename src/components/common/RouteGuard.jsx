import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function RouteGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    // if its not logged we r navigating him to the login form
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    
    return <Outlet />;
}