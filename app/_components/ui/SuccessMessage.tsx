import React from "react";
import BarIcon from "./BarIcon";

export default function SuccessMessage() {
  return (
    <div className="flex items-start gap-3 pb-3">
      <BarIcon iconName="Success" width={20} height={20} />
      <p className="text-[#005235] text-label-md font-nav-item">
        If an account exists with this email, we&apos;ve sent a password reset
        link.
      </p>
    </div>
  );
}
