import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidenavList from "./SidenavList";
const accordianList = [
  {
    icon: "/icons/Container (1).png",
    label: "epics",
    href: "/epics",
  },
  {
    icon: "/icons/Container (2).png",
    label: "tasks",
    href: "/tasks",
  },
  {
    icon: "/icons/Container (3).png",
    label: "members",
    href: "/members",
  },
  {
    icon: "/icons/Icon (1).png",
    label: "details",
    href: "/details",
  },
];
export default function SideAccordian({ isOpened }: { isOpened: boolean }) {
  // const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="pt-2.5">
      <div className={`pt-4 border-t-1 border-default } `}>
        <div className="rounded-6">
          <div>
            <button
              className={`relative bg-surface-highest flex gap-3 items-center p-3 ${isOpened ? "w-full" : "w-fit"}   rounded-tl-6 rounded-tr-6`}
            >
              <div className="w-[16.6px] h-[14.16px] relative  shrink-0">
                <Image src={"/icons/Vector.png"} alt="folder icon" fill />
              </div>
              {isOpened && (
                <>
                  <span className="text-active-side-item flex-1 min-w-0 truncate capitalize font-active-side-item text-neutral-dark">
                    active project link
                  </span>
                  <div className="w-[9.6px] h-[4.8px] relative shrink-0">
                    <Image src={"/icons/SVG.png"} alt="arrow up icon" fill />
                  </div>
                </>
              )}
              {/* ============ show hover list */}
              {!isOpened && (
                <SidenavList
                  itemStyle="navItem-closed"
                  style="sidenav-closed"
                  menuList={accordianList}
                />
              )}
            </button>
          </div>
          {isOpened && (
            <SidenavList
              style="sidenav-opened"
              itemStyle="navItem-opened"
              menuList={accordianList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
