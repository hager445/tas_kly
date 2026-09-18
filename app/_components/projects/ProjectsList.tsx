import React from "react";
import ProjectCard from "../../_components/projects/ProjectCard";
import CreateNewProjectCard from "../../_components/projects/CreateNewProjectCard";

import { Project } from "@/app/_types/Project";
export default function ProjectsList({
  projects,
  startPoint,
  endPoint,
  itemsPerPage,
  // currentPage,
}: {
  projects: Project[];
  startPoint: number;
  endPoint: number;
  itemsPerPage: number;
}) {
  const paginatedProjects = projects?.slice(startPoint, endPoint);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {paginatedProjects.map((p, index) => {
        return <ProjectCard key={index} project={p} />;
      })}

      {paginatedProjects.length < itemsPerPage && <CreateNewProjectCard />}
    </div>
  );
}
