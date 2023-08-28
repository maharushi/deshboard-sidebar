import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Side from "./components/MySide";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Side>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/about" element={<About />} />
          {/*  <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Side>
    </BrowserRouter>
  );
};

export default App;
