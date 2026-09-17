import React from "react";

export default function Button({
  disabled,
  loading,
  loadingText,
  style,
  children,
  type,
  onClick,
}: {
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  style?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}

      type={type}
      className={`capitalize cursor-pointer ${style}`}
    >
      {loading ? loadingText : children}
    </button>
  );
}
