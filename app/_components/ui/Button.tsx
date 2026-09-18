import React from "react";

export default function Button({
  disabled,
  loading,
  loadingText,
  className,
  children,
  type,
  onClick,
}: {
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}

      type={type}
      className={`capitalize cursor-pointer ${className}`}
    >
      {loading ? loadingText : children}
    </button>
  );
}
