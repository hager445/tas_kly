import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Collapse({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: any;
}) {
  return (
    <>
      <Button
        onClick={() => setIsOpened((opened: boolean) => !opened)}
        className="flex gap-3 items-center px-2.5 py-3"
        type="button"
      >
        {isOpened ? (
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
        {isOpened && (
          <span className="text-nav-item font-nav-item capitalize text-neutral-dark">
            Collapse
          </span>
        )}
      </Button>
    </>
  );
}
