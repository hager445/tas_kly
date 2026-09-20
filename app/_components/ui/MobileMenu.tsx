"use client";

import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";
import Sidenavbar from "./Sidebar";

export default function MobileMenu() {
  const { isOpenMenu } = useBurgerMenu();

  if (!isOpenMenu) return null;

  return (
    <></>
    // <div className="fixed top-0 bottom-0 left-0 right-0 inset-0 z-50">
    //   <Sidenavbar />
    // </div>
  );
}
