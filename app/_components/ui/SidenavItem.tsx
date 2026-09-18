import Image from "next/image";
import Link from "next/link";
import React from "react";
import BarIcon from "./BarIcon";

export default function SidenavItem({
  item,
  className,
}: {
  item: { icon: string; label: string; href: string };
  className: string;
}) {
  return (
    <li className={` items-center w-full ${className}`}>
      <BarIcon
        color="text-neutral-dark"
        iconName={item.label}
        alt={item.label}
        width={16}
        height={16}
      />
      <Link
        href={item.href}
        className="text-nav-item font-nav-item py-0.5 text-neutral-dark capitalize"
      >
        {item.label}
      </Link>
    </li>
  );
}
