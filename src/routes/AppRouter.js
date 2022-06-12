import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../componentes/Navbar/Navbar";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Page404 from "../pages/Page404";
import CartPage from "../pages/CartPage";

const AppRouter = () => {
  return (
    <Router>
        <NavBar background={'transparent'} />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />  
          <Route path="/products" element={<Products />} />               
          <Route path="/" element={<Home />} />     
          <Route path="*" element={<Page404 />} />          
        </Routes>        
    </Router>
  );
};

export default AppRouter;