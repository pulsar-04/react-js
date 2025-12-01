import { Routes, Route } from 'react-router-dom';


import "./App.css"; 
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Footer from './components/footer/Footer';
import Login from "./components/login/Login";
import Register from "./components/register/Register.jsx";

function App() {
  return (
    <div id="box">
        <Header />

        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        </main>

        <Footer />
    </div>
  );
}

export default App;