"use client";
import ProjectsList from "./ProjectsList";
import { getProjects } from "@/app/_lib/dashboard/projects/data-service";
import { Project } from "@/app/_types/Project";
import Pagination from "../ui/Pagination";
import { useState } from "react";

export default function PaginatedProjects({
  projects,
}: {
  projects: Project[];
}) {
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(projects.length);
  const itemsPerPage = 6;
  return (
    <div>
      <ProjectsList
        projects={projects}
        startPoint={startPoint}
        endPoint={endPoint}
        itemsPerPage={itemsPerPage}
      />
      <div className="mt-[70.5px]">
        <Pagination
          listLength={projects?.length + 1}
          itemsPerPage={itemsPerPage}
          setStartPoint={setStartPoint}
          setEndPoint={setEndPoint}
        />
      </div>
    </div>
  );
}
