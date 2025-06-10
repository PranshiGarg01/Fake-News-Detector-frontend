import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AboutUs from "./pages/AboutUs";

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname.toLowerCase() === "/aboutus";

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
