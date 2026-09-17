"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="relative">
        <Input
          className=" w-full rounded-md "
          label="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="enter your password"
        />

        <div className="absolute cursor-pointer right-3 top-[50%] transform translate-y-[-20%] flex items-center">
          {showPassword ? (
            <button type="button" onClick={() => setShowPassword(false)}>
              <Eye width={22} height={15} color="#737685" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(true)}>
              <EyeOff width={22} height={15} color="#737685" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
