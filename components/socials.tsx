import { socials } from "@/lib/data";
import Link from "next/link";
import React from "react";
type SocialProps = (typeof socials)[number];
export default function Social({ name, link, icon }: SocialProps) {
  return (
    <>
      <Link
        target="_blank"
        className="bg-white/70 text-black dark:bg-gray-300/10 dark:text-white p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer"
        href={link}
      >
        {icon}
      </Link>
    </>
  );
}
