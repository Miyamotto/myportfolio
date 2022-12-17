import React, { useState } from "react";
import Logo from "../assets/coder-logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navigation.css";
function Navigation() {
  const [mobile, setMobile] = useState(false);
  const toggleNav = () => {
    setMobile((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="navbar">
      <div className="sideA" id={mobile ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="sideB">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>

        <button onClick={toggleNav}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
