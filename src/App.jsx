import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer.jsx/Footer';
import menBanner from "./Components/assets/banner_mens.png";
import womenBanner from "./Components/assets/banner_women.png";
import kidBanner from "./Components/assets/banner_kids.png";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={menBanner} category="Men" />} />
        <Route path="/women" element={<ShopCategory banner={womenBanner} category="Women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidBanner} category="Kids" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
