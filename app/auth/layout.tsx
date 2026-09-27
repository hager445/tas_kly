import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-screen min-h-screen">
      {children}
    </div>
  );
}
