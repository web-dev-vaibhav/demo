import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import Games from "./Pages/Games/Games";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
      <Router>
        <Navbar id="myNav" home="nav-home" service="nav-service" product="nav-product" games="nav-game" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
