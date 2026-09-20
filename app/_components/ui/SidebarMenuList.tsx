"use client";
import { routes } from "@/app/_lib/routes/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const menuList = [
  {
    icon: "/icons/Icon2.png",
    label: "projects",
    href: routes.dashboard.projects.index,
  },
  {
    icon: "/icons/Container (5).png",
    label: "statics",
    href: routes.dashboard.statics.index,
  },
];
export default function SidebarMenuList({
  isExpandedSidebar,
}: {
  isExpandedSidebar: boolean;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className="flex flex-col gap-1 w-full">
      {menuList.map((item) => {
        console.log(item.href);

        return (
          <Link key={item.icon} href={`${item.href}`}>
            <li
              className={`cursor-pointer rounded-4 flex items-center gap-3 py-2.5 px-3 ${item.href.includes(pathname) ? "bg-white" : ""} `}
            >
              <Image
                color="text-neutral-dark"
                src={item.icon}
                alt={item.label}
                width={16}
                height={16}
              />
              {isExpandedSidebar && (
                <p className="text-nav-item font-nav-item py-0.5 text-neutral-dark capitalize">
                  {" "}
                  {item.label}
                </p>
              )}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
