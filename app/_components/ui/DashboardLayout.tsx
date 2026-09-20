"use client";
import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";
import React from "react";
import Sidebar from "./Sidebar";

import BottomNavbar from "./BottomNavbar";
import MobileMenu from "./MobileMenu";

export default function DashboardLayout({
  children,
  NavbarComponent,
}: {
  children: React.ReactNode;
  NavbarComponent: React.ReactNode;
}) {
  const { isOpenMenu } = useBurgerMenu();
  console.log(isOpenMenu);

  return (
    <>
      <div className={` sm:block ${isOpenMenu ? "w-screen" : "hidden"}`}>
        <Sidebar />
      </div>
      <div className={`flex-1 ${isOpenMenu ? "hidden" : ""}`}>
        <div className="flex flex-col gap-1 h-screen">
          {NavbarComponent}
          <main className="flex-1 overflow-y-auto">{children}</main>
          <div className="sm:hidden block ">
            <BottomNavbar />
          </div>
        </div>
      </div>
      <MobileMenu />
    </>
  );
}
