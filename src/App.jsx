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
import RouteGuard from "./components/common/RouteGuard";
import GuestGuard from "./components/common/GuestGuard"; 
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import "./App.css";

function App() {
  return (
    <AuthProvider>
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    {/* 1. public pages for everyone */}
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:carId" element={<Details />} />
                    <Route path="/search" element={<Search />} />

                    {/* 2. only for guests */}
                    <Route element={<GuestGuard />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    {/* 3. only for logged users */}
                    <Route element={<RouteGuard />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit/:carId" element={<Edit />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;