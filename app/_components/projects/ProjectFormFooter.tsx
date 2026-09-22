import React from "react";
import BarIcon from "../ui/BarIcon";

export default function ProjectFormFooter() {
  return (
    <div className="bg-surface-low p-6 w-full flex items-start gap-x-1.25 mx-6 sm:mx-0">
      <BarIcon iconName="light" width={11.25} height={15} />
      <p className="text-label-md xl:text-nowrap font-title-light-sm text-neutral-medium">
        <span className="font-label-md">Pro Tip:</span>
        You can invite project members and assign epics immediately after the
        initial creation process
      </p>
    </div>
  );
}
