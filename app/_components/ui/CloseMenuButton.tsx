"useClient";
import BarIcon from "./BarIcon";
import Button from "./Button";
import { useBurgerMenu } from "@/app/contexts/BurgerMenuContext";

export default function CloseMenuButton() {
  const { closeMenu } = useBurgerMenu();
  return (
    <Button
      type="button"
      onClick={closeMenu}
      className="mb-8 px-2 cursor-pointer"
    >
      <BarIcon iconName="close" width={14} height={14} />
    </Button>
  );
}
