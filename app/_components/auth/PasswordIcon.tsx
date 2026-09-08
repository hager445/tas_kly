"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordIcon() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {showPassword ? (
        <button onClick={() => setShowPassword(false)}>
          <EyeOff width={22} height={15} color="#737685" />
        </button>
      ) : (
        <button onClick={() => setShowPassword(true)}>
          <Eye width={22} height={15} color="#737685" />
        </button>
      )}
    </>
  );
}
