import React from "react";
import SidenavItem from "./SidenavItem";

export default function SidenavList({
  menuList,
  itemStyle,
  style,
}: {
  menuList: any[];
  style?: string;
  itemStyle: string;
}) {
  return (
    <ul className={`flex  ${style}`}>
      {menuList.map((item: any) => {
        return (
          <SidenavItem itemStyle={itemStyle} item={item} key={item?.icon} />
        );
      })}
    </ul>
  );
}
