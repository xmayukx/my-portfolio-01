"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[8] relative">
      <motion.div
        className=" fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none dark:border border-slate-700 border-opacity-50 dark:bg-black/50 bg-white/60 bg-opacity-80 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.8rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-start justify-center gap-y-1 text-[0.9rem] font-medium dark:text-slate-300 text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative h-3/4 flex items-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  " flex w-full px-3 py-[1.20em] dark:hover:text-white hover:text-black  transition-all",
                  { "text-black dark:text-white": activeSection === link.name },
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-600/10 dark:bg-gray-600/30 rounded-full absolute inset-1 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
