"use client";
import BarIcon from "./BarIcon";
import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";

export default function ToggleMenuButton() {
  const { toggleMenu } = useBurgerMenu();

  return (
    <button onClick={toggleMenu}>
      {" "}
      <BarIcon
        srcUrl={"/icons/Button.png"}
        alt={"menu burger"}
        width={26}
        height={20}
      />
    </button>
  );
}
