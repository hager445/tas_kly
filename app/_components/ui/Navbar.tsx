import UserLogo from "./UserLogo";

import ToggleMenuButton from "./ToggleMenuButton";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-6 bg-background border-b-1 border-default flex  justify-between sm:justify-end">
      <div className="flex items-center gap-4 sm:hidden">
        <ToggleMenuButton />
        <h2 className="uppercase text-logo font-logo">TASKLY</h2>
      </div>
      <div className="">
        <UserLogo />
      </div>
    </nav>
  );
}
