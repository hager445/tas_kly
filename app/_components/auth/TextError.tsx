import React from "react";
export default function TextError({
  errorMessage,
  error,
  name,
}: {
  errorMessage?: string;
  error?: any;
  name?: string;
}) {
  // console.log(errors);
  // console.log(errors?.[name!]?.message);

  return (
    <span className="text-error text-left text-label-sm">
      {errorMessage || error?.message}
    </span>
  );
}
