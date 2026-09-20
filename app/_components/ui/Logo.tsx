import Image from "next/image";
import React from "react";

export default function Logo({
  isExpandedSidebar,
}: {
  isExpandedSidebar: boolean;
}) {
  return (
    <div className="flex items-center  gap-1 mb-8 px-2 ">
      <Image src={"/icons/Icon.png"} alt={"logo"} width={18} height={20} />
      {isExpandedSidebar && (
        <h2 className="uppercase text-logo font-logo">TASKLY</h2>
      )}
    </div>
  );
}
