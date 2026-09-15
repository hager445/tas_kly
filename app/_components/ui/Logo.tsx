import Image from "next/image";
import React from "react";

export default function Logo({ isOpened }: { isOpened: boolean }) {
  return (
    <div className="flex items-center  gap-1 mb-8 px-2 ">
      <Image src={"/icons/Icon.png"} alt={"logo"} width={18} height={20} />
      {isOpened && <h2 className="uppercase text-logo font-logo">TASKLY</h2>}
    </div>
  );
}
