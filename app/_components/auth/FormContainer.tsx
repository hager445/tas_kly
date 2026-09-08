import React from "react";
type FormContainerProps = {
  maxWidth?: string;
  height?: string;
  padding?: string;
};
export default function FormContainer({
  formContainerProps,
  children,
}: {
  formContainerProps?: FormContainerProps;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col  items-center gap-1 bg-white rounded-8 ${formContainerProps?.maxWidth ? `max-w-${formContainerProps.maxWidth}` : ""} ${formContainerProps?.height ? `h-${formContainerProps.height}` : ""} ${formContainerProps?.padding ? `p-${formContainerProps.padding}` : ""}`}
    >
      {children}{" "}
    </div>
  );
}
