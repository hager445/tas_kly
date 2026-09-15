import React from "react";

export default function UserAvatar({ userName }: { userName: string }) {
  const splitName = userName.trim().split("/\s+/");
  const nameLength = splitName.length;
  const avatar =
    nameLength === 1
      ? `${splitName[0].slice(0, 2)}`
      : `${splitName[0][0]}${splitName[1][0]}`;
  return (
    <div className="h-10 w-10 bg-primary-container uppercase rounded-8 flex items-center justify-center p-2">
      <p className="text-avatar font-avatar text-white">{avatar}</p>
    </div>
  );
}
