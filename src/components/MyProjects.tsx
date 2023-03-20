import type { Project as ProjectType } from "../types";

import Project from "./Project";

const projects: ProjectType[] = [
  {
    id: "1",
    name: "Project 1",
    description: "This is a project",
    icon: "iconurl",
  },
  {
    id: "2",
    name: "Project 2",
    description: "This is a project",
    icon: "iconurl",
  },
  {
    id: "3",
    name: "Project 3",
    description: "This is a project",
    icon: "iconurl",
  },
];

export default function MyProjects() {
  return (
    <section>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
