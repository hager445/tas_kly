import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CancelButton() {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const backUrl = segments.slice(0, segments.length - 1).join("/");
  return (
    <Link href={backUrl}>
      <Button
        disabled={false}
        className="text-neutral-medium bg-transparent text-body-md font-label-md px-6 py-3 w-fit"
        type="button"
      >
        cancel
      </Button>
    </Link>
  );
}
