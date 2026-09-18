"use client";
import Button from "./Button";
import Image from "next/image";
import logoutAction from "@/app/actions/auth/logoutAction";
import { useState } from "react";
import TextError from "../auth/TextError";

export default function Logout({ isOpened }: { isOpened: boolean }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    setLoading(true);
    try {
      const result = await logoutAction();
      if (result && !result.success) {
        setError(result.message);
      }
    } catch (error) {
      // returned back from redirect; so that navigation occurs;
      throw error;
    }
    setLoading(false);
  }
  return (
    <>
      <Button
        loading={loading}
        loadingText={"Logging out..."}
        onClick={handleLogout}
        className="flex gap-3 items-center px-2.5 py-3"
        type="button"
      >
        <Image
          src={"/icons/Icon (2).png"}
          alt="logout icon"
          width={18}
          height={18}
        />
        {isOpened && (
          <span className="text-nav-item font-nav-item capitalize text-error">
            logout
          </span>
        )}
      </Button>
      <TextError error={error} />
    </>
  );
}
