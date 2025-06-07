// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Reservation from "./reservation";
import Contact from "./contact";
import About from "./about";
import "./App.css";


function Header() {
  return (
    <header>
      <h1> French Bistro</h1>

      <p>Authentic French Cuisine in the Heart of the City</p>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
}


function Footer() {
  return (
    <footer>
      <p>© 2025 French Bistro</p>
    </footer>
  );
}


export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<div className="fade-in"><Home /></div>} />
            <Route path="/menu" element={<div className="zoom-in"><Menu /></div>} />
            <Route path="/reservation" element={<div className="fade-in"><Reservation /></div>} />
            <Route path="/contact" element={<div className="fade-in"><Contact /></div>} />
            <Route path="/about" element={<div className="fade-in"><About /></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
