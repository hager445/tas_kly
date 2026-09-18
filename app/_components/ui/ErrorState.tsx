import React from "react";
import BarIcon from "./BarIcon";
import Button from "./Button";

export default function ErrorState() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* icon */}
      <div className="w-16 h-16 rounded-12 flex items-center justify-center">
        <BarIcon iconName="cloud" width={27.5} height={24.75} />
      </div>
      <div className="space-y-2">
        {" "}
        <h2 className="text-logo font-title-md text-neutral-dark">
          Something went wrong
        </h2>
        <p className="text-title-light-sm font-title-light-sm text-muted">
          W&apos;re having trouble retrieving your projects right now. Please
          try again in a moment.
        </p>
      </div>
      <Button type="button" className="bg-primary-container py-2.5 px-6">
        Retery connecton
      </Button>
    </div>
  );
}
