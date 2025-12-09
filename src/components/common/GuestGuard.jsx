import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    // if the user is loged it goes to the home page
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}