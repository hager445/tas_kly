import React, { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Collapse({
  isExpandedSidebar,
  setIsExpandedSidebar,
}: {
  isExpandedSidebar: boolean;
  setIsExpandedSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Button
        onClick={() => setIsExpandedSidebar((opened: boolean) => !opened)}
        className="sm:flex gap-3 items-center px-2.5 py-3 hidden"
        type="button"
      >
        {isExpandedSidebar ? (
          <Image
            src={"/icons/Container (4).png"}
            alt="collapse close icon"
            width={11.7}
            height={20}
          />
        ) : (
          <Image
            src={"/icons/Icon(8).png"}
            alt="collapse open icon"
            width={11.7}
            height={20}
          />
        )}
        {isExpandedSidebar && (
          <span className="text-nav-item font-nav-item capitalize text-neutral-dark">
            Collapse
          </span>
        )}
      </Button>
    </>
  );
}
