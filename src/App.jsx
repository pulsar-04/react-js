import { Routes, Route } from 'react-router-dom';


import "./App.css"; 
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div id="box">
        <Header />

        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                
            </Routes>
        </main>

        <Footer />
    </div>
  );
}

export default App;