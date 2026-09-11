import React from "react";

export default function FormTitle({
  mainTitle,
  subTitle,
}: {
  mainTitle: string;
  subTitle: string;
}) {
  return (
    <div className="w-full pb-10 pt-8 sm:pt-0 sm:text-nowrap flex flex-col items-center justify-center gap-2  text-center ">
      <h2 className="sm:text-[30px] text-[28px] font-display-lg  text-neutral-dark tracking-[-0.75px] mb-2">
        {mainTitle}
      </h2>
      <p className="text-body-md font-body-md text-neutral-medium ">
        {subTitle}
      </p>
    </div>
  );
}
