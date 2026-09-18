import React from "react";
import BarIcon from "../ui/BarIcon";
import Link from "next/link";
import { routes } from "@/app/_lib/routes/routes";

export default function CreateNewProjectCard() {
  return (
    <Link href={`${routes.dashboard.projects.add}`}>
      <div className="p-6 cursor-pointer  h-55  w-full rounded-8 bg-white border-2 border-dashed border-neutral-light/20 flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-12 h-12 rounded-12 flex items-center justify-center bg-surface-low">
            <BarIcon iconName="addCircle" width={20} height={20} />
          </div>
          <p className="tracking-[1.4px] uppercase text-body-md font-label-md text-muted">
            Add project
          </p>
        </div>
      </div>
    </Link>
  );
}
