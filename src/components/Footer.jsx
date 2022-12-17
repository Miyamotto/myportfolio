import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import GitHub from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import Linkedin from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/reignwolfv/">{<Instagram />}</a>
        <a href="https://github.com/Miyamotto">{<GitHub />}</a>
        <a href="https://www.facebook.com/GauekoV">{<Facebook />}</a>
        <a href="https://www.linkedin.com/in/giorgi-latsabidze-72b508252/">
          {<Linkedin />}
        </a>
      </div>
      <p>&copy; </p>
    </div>
  );
}

export default Footer;
