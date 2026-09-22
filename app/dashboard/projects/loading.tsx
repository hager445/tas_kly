import Spinner from "@/app/_components/ui/Spinner";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Spinner />
    </div>
  );
}
