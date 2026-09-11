import React from "react";
export default function TextError({
  serverError,
  errors,
  name,
}: {
  serverError?: string;
  errors?: any;
  name?: string;
}) {
  return (
    <span className="text-error text-center text-label-sm">
      {serverError || errors?.[name!]?.message}
    </span>
  );
}
