import PropTypes from "prop-types";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiNetlify } from "react-icons/si";

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
        icon = <FaReact />;
        break;
      case "node":
        icon = <FaNodeJs />;
        break;
      case "sql":
        icon = <PiFileSqlDuotone />;
        break;
      default:
        icon = "none";
        break;
    }
    return icon;
  });

  return (
    <div className="project--container">
      <h2 className="project--title">{project.title}</h2>
      <img
        className="project--thumbnail"
        src={project.imageUrl}
        alt="Project screenshot"
      />
      <p className="project--description">{project.description}</p>
      <ul className="project--skills--list">
        {skillIcons.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div className="project--links">
        <a
          className="animate--fade"
          href={project.netlifyUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>Website</span>
          <SiNetlify />
        </a>
        <a
          className="animate--fade"
          href={project.gitHubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FaGithub />
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};
