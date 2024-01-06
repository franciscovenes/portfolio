import PropTypes from "prop-types";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiNetlify, SiFirebase } from "react-icons/si";

export default function Project({ project }) {
  const skillIcons = project.skills.map((skill) => {
    let icon;
    switch (skill) {
      case "html":
        icon = <FaHtml5 aria-label="Html5" />;
        break;
      case "css":
        icon = <FaCss3 />;
        break;
      case "javascript":
        icon = <FaJs />;
        break;
      case "react":
        icon = <FaReact alt="React" />;
        break;
      case "node":
        icon = <FaNodeJs />;
        break;
      case "firebase":
        icon = <SiFirebase />;
        break;
      default:
        icon = "none";
        break;
    }
    return icon;
  });

  return (
    <div className="project--container">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt="Project screenshot" />
      <p>{project.description}</p>
      <ul>
        {skillIcons.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div className="project--links">
        <a href={project.netlifyUrl} target="_blank" rel="noreferrer">
          <span>Website</span>
          <SiNetlify />
        </a>
        <a href={project.gitHubUrl} target="_blank" rel="noreferrer">
          GitHub <FaGithub />
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};
