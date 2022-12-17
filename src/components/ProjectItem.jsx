import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
function ProjectItem({ image, name, tools, url }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{tools}</p>
      <a id="link" href={url}>
        Link {<LaunchIcon />}
      </a>
    </div>
  );
}

export default ProjectItem;
