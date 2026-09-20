"use client";
import BarIcon from "./BarIcon";
import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";
import Button from "./Button";

export default function ToggleMenuButton() {
  const { openMenu } = useBurgerMenu();

  return (
    <Button type="button" onClick={openMenu}>
      {" "}
      <BarIcon
        srcUrl={"/icons/Button.png"}
        alt={"menu burger"}
        width={26}
        height={20}
      />
    </Button>
  );
}
