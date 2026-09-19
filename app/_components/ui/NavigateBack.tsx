"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";

export default function NavigateBack() {
  const pathname = usePathname();
  // const params = useSearchParams();
  const segments = pathname.split("/");
  const backUrl = segments.slice(0, segments.length - 1).join("/");
  return (
    <Link href={backUrl}>
      <Button
        disabled={false}
        className="text-neutral-medium bg-transparent text-body-md font-label-md px-6 py-3 w-fit"
        type="button"
      >
        back
      </Button>
    </Link>
  );
}
