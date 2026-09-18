import React from "react";
import BarIcon from "../ui/BarIcon";

import { Project } from "@/app/_types/Project";
import Link from "next/link";
import { dateFormate } from "@/app/_lib/helpers/dateFormate";
const linkList = [
  {
    icon: "/icons/Container (1).png",
    label: "epics",
    href: "/epics",
  },
  {
    icon: "/icons/Container (2).png",
    label: "tasks",
    href: "/tasks",
  },
  {
    icon: "/icons/Container (3).png",
    label: "members",

    href: "/members",
  },
];
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 h-62 min-h-55  w-full rounded-8 bg-white overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <div className="w-full flex flex-col items-center gap-2 mx-auto flex-1 ">
          <h3 className="text-primary capitalize font-nav-item text-title-md">
            {project.name}
          </h3>
          <p className="w-full line-clamp-3 text-center text-muted font-body-md text-body-md leading-[22.5px] ">
            {project.description}
          </p>
          <div className="flex items-center justify-between  pt-4 w-full mt-auto mb-4">
            {linkList.map((l) => {
              return (
                <li
                  className={`flex gap-1  items-center w-full `}
                  key={l.label}
                >
                  <BarIcon
                    iconName={l.label}
                    alt={l.label}
                    width={20}
                    height={18}
                  />
                  <Link
                    href={l.href}
                    className="text-label-xs font-headline-md py-0.5 text-primary capitalize"
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </div>
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
