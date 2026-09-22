"use client";
import { routes } from "@/app/_lib/routes/routes";
import NavList from "./NavList";
import { useCurrentProjectContext } from "@/app/contexts/CurrentProjectContext";
import SidebarMenuList from "./SidebarMenuList";

export default function BottomNavbar() {
  const { currentProject } = useCurrentProjectContext();
  const project_id = currentProject?.id;
  const bottomList = [
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
  return (
    <>
      {/* <SidebarMenuList className="flex-col gap-0.5" /> */}
      <NavList
        className="gap-[7.12%] px-[30px] py-[15.5px] bg-surface-low "
        itemClassName="flex navItem-bottomNavbar"
        menuList={bottomList}
      />
    </>
  );
}
