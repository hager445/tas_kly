"use client";
import Link from "next/link";
import React from "react";
import BarIcon from "./BarIcon";
import { usePathname } from "next/navigation";

export default function NavItem({
  item,
  className,
}: {
  item: { icon: string; label: string; href: string };
  className: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li
      className={`flex items-center w-full ${className} ${isActive ? "bg-white" : ""}`}
    >
      <BarIcon
        color="text-neutral-dark"
        iconName={item.label}
        alt={item.label}
        width={16}
        height={16}
      />
      <Link
        href={item.href}
        className="sm:text-nav-item font-nav-item py-0.5 sm:text-neutral-dark capitalize text-neutral-dark/70 text-label-xs "
      >
        {item.label}
      </Link>
    </li>
  );
}
