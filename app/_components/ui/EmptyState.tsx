import React from "react";
import BarIcon from "./BarIcon";
import Button from "./Button";

export default function EmptyState() {
  return (
    <div className="flex flex-col gap-10.75 items-center w-[50%] mx-auto text-center">
      {/* icon */}
      <BarIcon iconName="EmptyStateIcon" width={288} height={288} />
      <div className="space-y-4">
        {" "}
        <h2 className="text-logo font-title-md text-neutral-dark">
          No Projects
        </h2>
        <p className="text-title-light-sm font-title-light-sm text-muted">
          You don’t have any projects yet. Start by defining your first
          architectural workspace to begin tracking tasks and epics.
        </p>
      </div>
      <Button type="button" className="primary-button w-1/2 rounded-4">
        Create New Project
      </Button>
    </div>
  );
}
