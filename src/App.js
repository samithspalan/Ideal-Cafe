import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OffersPage from './pages/Offers';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout'; // Import Checkout page
import { CartProvider } from './context/CartContext'; // Import CartProvider

function App() {
  const [darkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Navbar darkMode={darkMode} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu searchQuery={searchQuery} />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add route for checkout */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
