import Sidenavbar from "../_components/ui/Sidenavbar";
import Navbar from "../_components/ui/Navbar";
import BottomNavbar from "../_components/ui/BottomNavbar";

import { BurgerMenuProvider } from "../contexts/BurgerMenuContext";
import MobileMenu from "../_components/ui/MobileMenu";

export default function layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <BurgerMenuProvider>
      <div className="hidden sm:block">
        <Sidenavbar />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-1 h-screen">
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <div className="sm:hidden block ">
            <BottomNavbar />
          </div>
        </div>
      </div>
      <MobileMenu />
    </BurgerMenuProvider>
  );
}
