import React from "react";
import ProjectCard from "../../_components/projects/ProjectCard";
import CreateNewProjectCard from "../../_components/projects/CreateNewProjectCard";

import { Project } from "@/app/_types/Project";
import { usePaginationContext } from "@/app/contexts/PaginationContext";
export default function ProjectsList({
  projects,
  itemsPerPage,
}: {
  projects: Project[];

  itemsPerPage: number;
}) {
  const { currentPage } = usePaginationContext();
  const startPoint = (currentPage - 1) * itemsPerPage;
  const endPoint = currentPage * itemsPerPage;
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
