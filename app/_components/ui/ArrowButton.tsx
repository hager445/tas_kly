import BarIcon from "./BarIcon";

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous page" : "Next page"}
    >
      <div className="w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center">
        {direction === "left" ? (
          <BarIcon iconName="ArrowLeft" width={4.32} height={7} />
        ) : (
          <BarIcon iconName="ArrowRight" width={4.32} height={7} />
        )}
      </div>
    </button>
  );
}
