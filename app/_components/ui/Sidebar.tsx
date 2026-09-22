"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import SidebarMenuList from "./SidebarMenuList";
import SideAccordian from "./ActiveProjectLink";
import Logout from "./Logout";
import Collapse from "./Collapse";
import CloseMenuButton from "./CloseMenuButton";
import ActiveProjectLink from "./ActiveProjectLink";
import { usePathname } from "next/navigation";
import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";

export default function Sidebar() {
  const { closeMenu } = useBurgerMenu();

  const pathname = usePathname();
  const [isExpandedSidebar, setIsExpandedSidebar] = useState(true);
  useEffect(() => {
    closeMenu();
  }, [pathname]);
  return (
    <div
      className={`p-4   bg-surface-low h-screen flex flex-col mx-auto ${isExpandedSidebar ? "w-auto" : "w-20"}`}
    >
      <div className="flex items-center justify-between">
        <div className={`${isExpandedSidebar ? "" : "w-fit mx-auto"} block`}>
          <Logo isExpandedSidebar={isExpandedSidebar} />
        </div>
        <div className="sm:hidden">
          {" "}
          <CloseMenuButton />
        </div>
      </div>
      <div
        className={`flex flex-col gap-1 ${isExpandedSidebar ? "sm:w-sidebar-item w-full" : "w-fit mx-auto"}`}
      >
        <SidebarMenuList isExpandedSidebar={isExpandedSidebar} />
        {/* <SideAccordian isExpandedSidebar={isExpandedSidebar} /> */}
        <ActiveProjectLink isExpandedSidebar={isExpandedSidebar} />
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <Collapse
          isExpandedSidebar={isExpandedSidebar}
          setIsExpandedSidebar={setIsExpandedSidebar}
        />
        <Logout isExpandedSidebar={isExpandedSidebar} />
      </div>
    </div>
  );
}
