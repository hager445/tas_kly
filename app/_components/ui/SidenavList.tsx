import React from "react";
import SidenavItem from "./SidenavItem";

export default function SidenavList({
  menuList,
  itemStyle,
  style,
}: {
  menuList: { icon: string; label: string; href: string }[];
  style?: string;
  itemStyle: string;
}) {
  return (
    <ul className={`flex flex-col gap-1 ${style}`}>
      {menuList.map((item: { icon: string; label: string; href: string }) => {
        return (
          <SidenavItem itemStyle={itemStyle} item={item} key={item?.icon} />
        );
      })}
    </ul>
  );
}
