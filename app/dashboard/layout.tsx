import { BurgerMenuProvider } from "../contexts/BurgerMenuContext";

import DashboardLayout from "../_components/ui/DashboardLayout";
import Navbar from "../_components/ui/Navbar";

export default function layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <BurgerMenuProvider>
      <DashboardLayout NavbarComponent={<Navbar />}>{children}</DashboardLayout>
    </BurgerMenuProvider>
  );
}
