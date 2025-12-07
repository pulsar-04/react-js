import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Create from "./components/create/Create"; 
import Catalog from "./components/catalog/Catalog";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";
import "./App.css";

function App() {
  return (
    <AuthProvider>
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/create" element={<Create />} /> 
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:carId" element={<Details />} />
                    <Route path="/edit/:carId" element={<Edit />} />
                </Routes>
            </main>

            <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;