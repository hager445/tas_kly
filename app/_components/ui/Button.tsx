import React from "react";

export default function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      className="w-full cursor-pointer bg-linear-gradient text-white px-4 py-2 rounded-[8px] hover:bg-primary-dark transition-colors duration-300"
    >
      {children}
    </button>
  );
}
