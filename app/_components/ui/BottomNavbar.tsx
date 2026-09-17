import SidenavList from "./SidenavList";
const bottomList = [
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "epics",
    href: "/epics",
  },
  {
    label: "tasks",
    href: "/tasks",
  },
  {
    label: "members",
    href: "/members",
  },
  {
    label: "details",
    href: "/details",
  },
];
export default function BottomNavbar() {
  return (
    <>
      <SidenavList
        style="gap-[7.12%] px-[30px] py-[15.5px] bg-surface-low"
        itemStyle="flex navItem-bottomNavbar"
        menuList={bottomList}
      />
    </>
  );
}
