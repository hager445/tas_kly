import Link from "next/link";
import React from "react";
import ResendTimer from "./ResendTimer";

export default function ResendEmailButton() {
  return (
    <div className="pt-3 border-t-1 border-[#0052351A] text-label-sm font-label-sm flex justify-between items-center">
      <p className="text-[#00523599]/60 uppercase">
        Didn&apos;t receive email?
      </p>
      <Link href={""} className="">
        <p className="uppercase text-primary flex items-center gap-1">
          RESEND IN <ResendTimer targetTime={5} />
        </p>
      </Link>
    </div>
  );
}
// hagetali50@gmail.com
