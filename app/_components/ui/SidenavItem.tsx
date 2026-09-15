import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SidenavItem({
  item,
  itemStyle,
}: {
  item: { icon: string; label: string; href: string };
  itemStyle: string;
}) {
  return (
    <li className={`flex items-center gap-3 py-2.5 px-3 w-full ${itemStyle}`}>
      <Image
        color="text-neutral-dark"
        src={item.icon}
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
