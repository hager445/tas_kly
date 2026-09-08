import React from "react";

export default function Input({
  label,
  inputWidth,
  type,
  placeholder,
  icon,
  children,
}: {
  label: string;
  inputWidth?: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="uppercase text-label-sm font-label-sm text-neutral-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={` py-2 px-3 border-none focus:border-0 focus:ring-0 focus:outline-none rounded-md w-${inputWidth || "full"} h-12 bg-surface-highest placeholder:text-placeholder placeholder:text-title-sm placeholder:font-body-md`}
        />
        {icon && (
          <div className="absolute right-3 top-[50%] transform translate-y-[-50%] flex items-center">
            {icon}
          </div>
        )}
      </div>
      <span className="text-neutral-light text-label-sm">{children}</span>
    </div>
  );
}
