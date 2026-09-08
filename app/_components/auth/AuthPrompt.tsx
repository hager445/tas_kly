import Link from "next/link";
import React from "react";

export default function AuthPrompt({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <div className="text-center pt-8">
      <p className="text-body-md font-body-md text-neutral-medium ">
        {text}
        <Link
          href={`/${link}`}
          className="text-primary font-headline-lg hover:underline"
        >
          {link}
        </Link>
      </p>
    </div>
  );
}
