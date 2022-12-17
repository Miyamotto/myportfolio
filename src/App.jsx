import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/projects" exact element={<Projects />} />
          </Routes>
          <Routes>
            <Route path="/about" exact element={<About />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
