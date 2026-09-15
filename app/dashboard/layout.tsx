import React from "react";
import Sidenavbar from "../_components/ui/Sidenavbar";
import Navbar from "../_components/ui/Navbar";

export default function layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      <Sidenavbar />

      <div className="flex-1">
        <div className="flex flex-col gap-1">
          {" "}
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
