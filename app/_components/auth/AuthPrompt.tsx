import Link from "next/link";
import React from "react";

export default function AuthPrompt({
  to,
  link,
  text,
  style,
}: {
  to: string;
  link: string;
  text?: string;
  style?: string;
}) {
  return (
    <div className="text-center pt-8">
      <p className="text-body-md font-body-md text-neutral-medium ">
        {text}
        <Link
          href={`${to}`}
          className={`text-primary font-headline-lg hover:underline`}
        >
          {link}
        </Link>
      </p>
    </div>
  );
}
