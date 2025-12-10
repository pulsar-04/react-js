import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">CarMarket</Link></h1>

            <nav>
                <Link to="/catalog">All Cars</Link>
                <Link to="/search">Search</Link>
                <Link to="/top-rated">Top Rated</Link>

                {isAuthenticated && (
                    <div id="user">
                        <Link to="/create">Sell a Car</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to="/profile">My Profile</Link>

                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}