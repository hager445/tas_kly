"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BarIcon from "./BarIcon";
import { routeLabels } from "@/app/_lib/routes/routeLabels";

export default function BreadCrumbs() {
  const pathname = usePathname();
  const breadcrumbSegments = pathname
    .split("/")
    .filter((s) => !s.includes("dashboard") && s !== "");
  console.log(breadcrumbSegments);

  return (
    <nav aria-label="Breadcrumb" className="sm:flex items-center hidden">
      {breadcrumbSegments.map((segment, index) => {
        const isLast = index === breadcrumbSegments.length - 1;
        const href =
          "/dashboard/" + breadcrumbSegments.slice(0, index + 1).join("/");

        return (
          <div className="flex items-center" key={segment}>
            <Link
              href={href}
              className={`uppercase text-label-md font-label-md tracking-[1.2px]  ${!isLast ? "text-muted opacity-60" : "text-neutral-dark"}`}
            >
              {routeLabels[segment] || segment}
            </Link>
            {!isLast && (
              <div className="px-2">
                {" "}
                <BarIcon iconName="arrowRight" width={3.7} height={6} />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
