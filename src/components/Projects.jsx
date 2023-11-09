import { projectsData } from "../utils/data";
import Project from "./Project";

export default function Projects() {
  const projectElements = projectsData.map((project) => (
    <Project key={project.id} project={project} />
  ));

  return (
    <div id="projects" className="projects--container section--container">
      <h1 className="section--title">Projects</h1>
      <p className="summary">
        Here you will find a list of my project&apos;s. Your website or app
        could be the next!
      </p>
      <div className="projects--list">{projectElements}</div>
    </div>
  );
}
