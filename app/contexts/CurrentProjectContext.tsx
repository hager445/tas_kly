"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Project } from "../_types/Project";
import { useParams, useSearchParams } from "next/navigation";
import { getProjectByID } from "../_lib/dashboard/projects/data-service";
import { getCurrentProjectAction } from "../actions/dashboard/getCurrentProjectAction";

type CurrentProjectContextType = {
  currentProject: Project | null;
  setCurrentProject: React.Dispatch<React.SetStateAction<Project | null>>;
};
const CurrentProjectContext = createContext<CurrentProjectContextType | null>(
  null,
);
export function CurrentProjectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{ projectId: string | undefined }>();
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const { projectId } = params;
  console.log(projectId);

  useEffect(() => {
    if (!projectId) {
      setCurrentProject(null);
      return;
    }
    if (currentProject?.id === projectId) return;
    const getCurrentProject = async () => {
      try {
        const res = await getCurrentProjectAction(projectId);
        const currentProject = res[0];
        setCurrentProject(currentProject);
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentProject();
  }, [projectId, currentProject?.id]);

  return (
    <CurrentProjectContext.Provider
      value={{ setCurrentProject, currentProject }}
    >
      {children}
    </CurrentProjectContext.Provider>
  );
}
export function useCurrentProjectContext() {
  const context = useContext(CurrentProjectContext);

  if (!context) {
    throw new Error(
      "useCurrentProjectContext must be used within CurrentPageProvider",
    );
  }
  return context;
}
