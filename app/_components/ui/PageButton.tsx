import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

export default function PageButton({
  page,
  isActive,
  onClick,
}: {
  page: number | string;
  isActive: boolean;
  onClick?: () => void | Dispatch<SetStateAction<number>>;
}) {
  return (
    <div
      className={`w-8 h-8 rounded-2 border border-neutral-light/30 flex items-center justify-center ${
        isActive ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Button
        className={`text-label-md font-label-md ${isActive ? "text-white" : "text-muted"}`}
        type="button"
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
      >
        {page}
      </Button>
    </div>
  );
}
