import { formTitleVariants } from "@/app/_lib/variants/formTilteVariants";
import React from "react";

export default function FormTitle({
  mainTitle,
  subTitle,
  variant,
  className,
}: {
  className?: string;
  variant: "authTitle" | "projectFormTitle";
  mainTitle: string;
  subTitle: string;
}) {
  return (
    <div className={` w-full mx-auto ${className}`}>
      <h2 className={`${formTitleVariants[variant].mainTitle}`}>{mainTitle}</h2>
      <p className={formTitleVariants[variant].subTitle}>{subTitle}</p>
    </div>
  );
}
