import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import mainImage from "../assets/background.jpg";
import WorkIcon from "@mui/icons-material/Work";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Home() {
  return (
    <div
      className="mainContent"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="content">
        <h1>My Portfolio {<WorkIcon />}</h1>
        <p className="animate">Check My Work </p>
        <p className="animate">{<ArrowDownwardIcon />}</p>
        <Link to="./projects">
          <button id="projects">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
