import Image from "next/image";
import React from "react";
const iconsList = [
  {
    iconUrl: "/icons/ArrowRightBlue.png",
    label: "ArrowRightBlue",
    iconName: "ArrowRightBlue",
  },
  {
    iconUrl: "/icons/SuccessIcon.png",
    label: "Success",
    iconName: "Success",
  },
  {
    iconUrl: "/icons/Edit.png",
    label: "Edit",
    iconName: "Edit",
  },
  {
    iconUrl: "/icons/Plus.png",
    label: "Plus",
    iconName: "plus",
  },
  {
    iconUrl: "/icons/Close.png",
    label: "Close",
    iconName: "close",
  },
  {
    iconUrl: "/icons/ArrowRight.png",
    label: "Arrow Right",
    iconName: "ArrowRightBox",
  },
  {
    iconUrl: "/icons/ArrowLeft.png",
    label: "Arrow Left",
    iconName: "ArrowLeft",
  },
  {
    iconUrl: "/icons/EmptyStateIcon.png",
    label: "Empty State Icon",
    iconName: "EmptyStateIcon",
  },
  {
    iconUrl: "/icons/AddCircle.png",
    label: "add circle",
    iconName: "addCircle",
  },
  {
    iconUrl: "/icons/Cloud.png",
    label: "cloud",
    iconName: "cloud",
  },
  {
    iconUrl: "/icons/IconLight.png",
    label: "light",
    iconName: "light",
  },
  {
    iconUrl: "/icons/IconCheck.png",
    label: "check plus",
    iconName: "checkPlus",
  },
  {
    iconUrl: "/icons/IconRight.png",
    label: "arrow right",
    iconName: "arrowRight",
  },
  {
    iconUrl: "/icons/Icon9.png",
    label: "projects",
    iconName: "projects",
  },
  {
    iconUrl: "/icons/SVG.png",
    label: "arrow up",
    iconName: "arrowUp",
  },
  {
    iconUrl: "/icons/Vector.png",
    label: "active project",
    iconName: "activeProject",
  },
  {
    iconUrl: "/icons/Container (1).png",
    label: "epics",
    iconName: "epics",
  },
  {
    iconUrl: "/icons/Container (2).png",
    label: "tasks",
    iconName: "tasks",
  },
  {
    iconUrl: "/icons/Container (3).png",
    label: "members",
    iconName: "members",
  },
  {
    iconUrl: "/icons/Icon (1).png",
    label: "details",
    iconName: "details",
  },
];
export default function BarIcon({
  width,
  height,
  iconName,
  color,
  srcUrl = "",
  alt,
}: {
  width?: number;
  height?: number;
  iconName?: string;
  color?: string;
  srcUrl?: string;
  alt?: string;
}) {
  const matchedIcon = iconsList.find(
    (icon) => iconName && icon.iconName.includes(iconName),
  );

  return (
    <>
      <Image
        color={`${color || "text-neutral-dark"}`}
        src={matchedIcon?.iconUrl || srcUrl}

        alt={matchedIcon?.label || alt || "icon"}
        width={width || 16}
        height={height || 16}
      />
    </>
  );
}
