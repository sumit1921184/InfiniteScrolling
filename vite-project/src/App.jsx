// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Form from "./pages/Form";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/category1" element={<Category1 />} />
        <Route path="/shop/category2" element={<Category2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </Router>
  );
};

export default App;
