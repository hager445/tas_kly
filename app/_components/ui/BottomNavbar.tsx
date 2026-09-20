import NavList from "./NavList";

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
      <NavList
        className="gap-[7.12%] px-[30px] py-[15.5px] bg-surface-low"
        itemClassName="flex navItem-bottomNavbar"
        menuList={bottomList}
      />
    </>
  );
}
