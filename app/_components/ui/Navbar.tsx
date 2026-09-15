import React from "react";
import UserLogo from "./UserLogo";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-6 bg-background border-b-1 border-default flex justify-end ">
      {/* <div className="flex items-end"> */}
      <UserLogo />
      {/* </div> */}
    </nav>
  );
}
