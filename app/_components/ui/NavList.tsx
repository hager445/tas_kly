import React, { Dispatch, SetStateAction } from "react";
import NavItem from "./NavItem";
import { listItem } from "./SideAccordian";

export default function NavList({
  menuList,
  itemClassName,
  className,
  isHovered,
  setIsHovered,
}: {
  menuList: any[];
  className?: string;
  itemClassName: string;
  isHovered?: boolean;
  setIsHovered?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className={`flex ${className}`}>
      {menuList.map((item) => {
        return (
          <NavItem className={itemClassName} item={item} key={item?.icon} />
        );
      })}
    </ul>
  );
}
