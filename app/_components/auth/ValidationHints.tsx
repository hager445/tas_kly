import { CircleCheck, Circle } from "lucide-react";

export default function ValidationHints({
  validationList,
  checked,
}: {
  validationList: string[];
  checked: { [key: number]: boolean };
}) {
  return (
    <div className="w-full rounded-8 p-4 bg-surface-lowest">
      {validationList.map((hint, index) => (
        <div className="flex items-center gap-2" key={index}>
          {!checked[index] ? (
            <Circle className="text-neutral-light" size={11.6} />
          ) : (
            <CircleCheck className="text-[#004E32]" size={11.6} />
          )}
          <p className="text-[#434654] text-label-sm font-body-md">{hint}</p>
        </div>
      ))}
    </div>
  );
}
