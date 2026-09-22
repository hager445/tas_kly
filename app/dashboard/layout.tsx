import { BurgerMenuProvider } from "../contexts/BurgerMenuContext";

import DashboardLayout from "../_components/ui/DashboardLayout";
import Navbar from "../_components/ui/Navbar";
import { CurrentProjectProvider } from "../contexts/CurrentProjectContext";

export default function layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <CurrentProjectProvider>
      <BurgerMenuProvider>
        <DashboardLayout NavbarComponent={<Navbar />}>
          {children}
        </DashboardLayout>
      </BurgerMenuProvider>
    </CurrentProjectProvider>
  );
}
