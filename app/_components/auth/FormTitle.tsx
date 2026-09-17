import { formTitleVariants } from "@/app/_lib/variants/formTilteVariants";
import React from "react";

export default function FormTitle({
  mainTitle,
  subTitle,
  variant,
}: {
  variant: "authTitle" | "createNewProjectTitle";
  mainTitle: string;
  subTitle: string;
}) {
  return (
    <div className=" flex flex-col justify-center">
      <h2 className={formTitleVariants[variant].mainTitle}>{mainTitle}</h2>
      <p className={formTitleVariants[variant].subTitle}>{subTitle}</p>
    </div>
  );
}
