import PaginatedProjects from "@/app/_components/projects/PaginatedProjects";
import BarIcon from "@/app/_components/ui/BarIcon";
import Button from "@/app/_components/ui/Button";
import EmptyState from "@/app/_components/ui/EmptyState";
import { getProjects } from "@/app/_lib/dashboard/projects/data-service";
import { routes } from "@/app/_lib/routes/routes";
import { Project } from "@/app/_types/Project";
import Link from "next/link";

export default async function page() {
  const projects: Project[] = [];
  if (projects.length === 0) return <EmptyState />;
  return (
    <div className="px-4">
      <div className=" flex justify-between items-end">
        <div className=" flex-col items-start gap-1">
          <h2 className="capitalize text-headline-md font-headline-md text-neutral-dark">
            projects
          </h2>
          <p className="text-muted text-title-light-sm font-title-light-sm">
            Manage and curate your projects
          </p>
        </div>
        {/* ================== */}
        <Link
          className="hidden sm:flex"
          href={`${routes.dashboard.projects.add}`}
        >
          <Button
            disabled={false}
            className="primary-button rounded-2 px-6 py-3 w-fit"
            type="button"
          >
            create new project
          </Button>
        </Link>
        <Link
          className="sm:hidden fixed z-50 bottom-20.75 right-6"
          href={`${routes.dashboard.projects.add}`}
        >
          <Button
            disabled={false}
            className="primary-button rounded-12 w-14 h-14 flex items-center justify-center"
            type="button"
          >
            <BarIcon iconName="plus" width={14} height={14} />
          </Button>
        </Link>
      </div>
      {/* ============================================= */}
      <div className="pt-10">
        <PaginatedProjects projects={projects} />
      </div>
    </div>
  );
}
