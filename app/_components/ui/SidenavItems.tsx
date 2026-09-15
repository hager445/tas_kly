import Image from "next/image";
import Link from "next/link";
import React from "react";
const sidenavList = [
  {
    icon: "/icons/Icon2.png",
    label: "projects",
    href: "/projects",
  },
  {
    icon: "/icons/Container (5).png",
    label: "statics",
    href: "/statics",
  },
];
export default function SidenavItems({ isOpened }: { isOpened: boolean }) {
  return (
    <ul className="flex flex-col gap-1 ">
      {sidenavList.map((item) => {
        return (
          <li
            key={item.icon}
            className={`flex items-center gap-3 py-2.5 px-3 `}
          >
            <Image
              color="text-neutral-dark"
              src={item.icon}
              alt={item.label}
              width={16}
              height={16}
            />
            {isOpened && (
              <Link
                href={item.href}
                className="text-nav-item font-nav-item py-0.5 text-neutral-dark capitalize"
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
