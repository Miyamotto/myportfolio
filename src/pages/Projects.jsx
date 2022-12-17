import { MockData } from "../components/MockData";
import ProjectItem from "../components/ProjectItem";

import "../styles/Projects.css";
function Project() {
  return (
    <div className="project">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectList">
        {MockData.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              tools={projectItem.tools}
              url={projectItem.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
