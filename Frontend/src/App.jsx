import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./styles/style.css";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;