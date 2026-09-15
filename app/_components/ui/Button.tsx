import React from "react";

export default function Button({
  loading,
  loadingText,
  style,
  children,
  type,
  onClick,
}: {
  loading?: boolean;
  loadingText?: string;
  style?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      type={type}
      className={`w-full cursor-pointer  px-4 py-2 ${style}`}
    >
      {loading ? loadingText : children}
    </button>
  );
}
