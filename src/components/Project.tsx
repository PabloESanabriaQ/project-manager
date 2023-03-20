import type { Project as ProjectType } from "../types";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <article>
      <img src={project.icon} alt={project.name} />
      <h1>Project {project.name}</h1>
      <p>{project.description}</p>
    </article>
  );
}
