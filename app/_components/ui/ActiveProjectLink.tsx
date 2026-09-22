"use client";
import { useState } from "react";
import NavList from "./NavList";
export type listItem = {
  icon?: string;
  label: string;
  href: string;
};
import BarIcon from "./BarIcon";
import { useCurrentProjectContext } from "@/app/contexts/CurrentProjectContext";
import { routes } from "@/app/_lib/routes/routes";
export default function ActiveProjectLink({
  isExpandedSidebar,
}: {
  isExpandedSidebar: boolean;
}) {
  const { currentProject } = useCurrentProjectContext();
  const project_id = currentProject?.id;
  console.log(currentProject);
  const accordianList: listItem[] = [
    {
      icon: "/icons/Container (1).png",
      label: "epics",
      href: `${routes.dashboard.projects.nestedRoutes.epics(project_id)}`,
    },
    {
      icon: "/icons/Container (2).png",
      label: "tasks",
      href: `${routes.dashboard.projects.nestedRoutes.tasks(project_id)}`,
    },
    {
      icon: "/icons/Container (3).png",
      label: "members",
      href: `${routes.dashboard.projects.nestedRoutes.members(project_id)}`,
    },
    {
      icon: "/icons/Icon (1).png",
      label: "details",
      href: `${routes.dashboard.projects.nestedRoutes.details(project_id)}`,
    },
  ];

  const [isHovered, setIsHovered] = useState(true);
  if (currentProject && Object.keys(currentProject).length > 0)
    return (
      <div className="pt-2.5">
        <div className={`pt-4 border-t-1 border-default } `}>
          <div className="rounded-6">
            <div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            >
              <button
                className={`curser-pointer relative bg-surface-highest flex gap-3 items-center p-3 ${isExpandedSidebar ? "w-full" : "w-fit"}   rounded-tl-6 rounded-tr-6`}
              >
                <BarIcon iconName="activeProject" width={16.6} height={14.16} />

                {isExpandedSidebar && (
                  <>
                    <span className="text-active-side-item flex-1 min-w-0 truncate capitalize font-active-side-item text-neutral-dark">
                      {currentProject?.name}
                    </span>

                    <BarIcon iconName="arrowUp" width={11} height={6} />
                  </>
                )}
                {/* ============ show hover list */}
                {!isExpandedSidebar && (
                  <NavList
                    itemClassName={` sidebarItem-isCollapsed`}
                    className={`${isHovered ? "" : "hidden"} sidebar-isCollapsed`}
                    menuList={accordianList}
                  />
                )}
              </button>
            </div>
            {isExpandedSidebar && (
              <NavList
                className="sidebar-notCollapsed"
                itemClassName="sidebarItem-notCollapsed"
                menuList={accordianList}
              />
            )}
          </div>
        </div>
      </div>
    );
}
