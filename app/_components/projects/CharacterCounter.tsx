import React from "react";
import TextError from "../auth/TextError";

export default function CharacterCounter({
  maxLength,
  characterLength,
}: {
  maxLength: number;
  characterLength: number;
}) {
  return (
    <div className="flex flex-col">
      <span className="font-nav-item text-label-sm text-neutral-medium text-right">
        {characterLength} / {maxLength}
      </span>
      {characterLength >= maxLength && (
        <TextError
          errorMessage={`This Field can't be more than ${maxLength} chars`}
        />
      )}
    </div>
  );
}
