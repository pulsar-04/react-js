import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            
            <h1><Link className="home" to="/">CarMarket</Link></h1>

            <nav>
                
                <Link to="/catalog">All Cars</Link>

                
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>

            </nav>
        </header>
    );
}