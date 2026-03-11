import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<Gallery />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
