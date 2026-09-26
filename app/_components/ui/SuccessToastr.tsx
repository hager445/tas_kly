import React from "react";

export default function SuccessToastr({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className} bg-success/30 p-4 rounded-4`}>{children}</div>
  );
}
