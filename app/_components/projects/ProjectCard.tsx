"use client";
import BarIcon from "../ui/BarIcon";
import { Project } from "@/app/_types/Project";
import Link from "next/link";
import { dateFormate } from "@/app/_lib/helpers/dateFormate";
import { routes } from "@/app/_lib/routes/routes";
import { useRouter } from "next/navigation";
export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const project_id = project?.id;
  const linkList = [
    {
      label: "epics",
      href: `${routes.dashboard.projects.nestedRoutes.epics(project_id)}`,
    },
    {
      label: "tasks",
      href: `${routes.dashboard.projects.nestedRoutes.tasks(project_id)}`,
    },
    {
      label: "members",
      href: `${routes.dashboard.projects.nestedRoutes.members(project_id)}`,
    },
    {
      label: "Edit",
      href: `${routes.dashboard.projects.nestedRoutes.details(project_id)}`,
    },
  ];
  return (
    <div
      onClick={() =>
        router.push(
          `${routes.dashboard.projects.nestedRoutes.epics(project_id)}`,
        )
      }
      className="cursor-pointer p-6 h-62 min-h-55  w-full rounded-8 bg-white overflow-hidden"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="w-full flex flex-col items-center gap-2 mx-auto flex-1 ">
          <h3 className="text-primary capitalize font-nav-item text-title-md">
            {project.name}
          </h3>
          <p className="w-full line-clamp-3 text-center text-muted font-body-md text-body-md leading-[22.5px] ">
            {project.description}
          </p>
          <ul className="flex items-center justify-between   pt-4 w-full mt-auto mb-4">
            {linkList.map((l) => {
              return (
                <li
                  className={`flex gap-1  items-center w-full justify-center `}
                  key={l.label}
                >
                  <BarIcon
                    iconName={l.label}
                    alt={l.label}
                    width={18}
                    height={18}
                  />
                  <Link
                    onClick={(e) => e.stopPropagation()}

                    href={l.href}
                    className="text-label-xs font-headline-md py-0.5 text-primary capitalize"
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ============== date */}

        <div className="pt-4  border-t-1 border-neutral-light/10 flex justify-between items-center ">
          <span className="uppercase text-label-sm  font-label-sm text-placeholder">
            created at
          </span>
          <span className="text-nav-item font--nav-item text-muted">
            {dateFormate(project.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
}
