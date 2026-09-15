"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import SidebarMenuList from "./SidenavItems";
import SideAccordian from "./SideAccordian";
import Logout from "./Logout";
import Collapse from "./Collapse";

export default function Sidenavbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`p-4  bg-surface-low h-screen flex flex-col mx-auto ${isOpened ? "w-auto" : "w-20"}`}
    >
      <div className={`${isOpened ? "" : "w-fit mx-auto"}`}>
        <Logo isOpened={isOpened} />
      </div>
      <div
        className={`flex flex-col gap-1 ${isOpened ? "w-sidebar-item" : "w-fit mx-auto"}`}
      >
        <SidebarMenuList isOpened={isOpened} />
        <SideAccordian isOpened={isOpened} />
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <Collapse isOpened={isOpened} setIsOpened={setIsOpened} />
        <Logout isOpened={isOpened} />
      </div>
    </div>
  );
}
