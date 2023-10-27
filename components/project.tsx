"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];
export const Project = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className="group  mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" relative dark:bg-rose-950/60 bg-gray-200 dark:hover:bg-rose-950/50 hover:bg-gray-300 transition max-w-[40rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[18rem] rounded-lg">
        <div className="sm:group-even:ml-[20rem] pb-7 px-5 sm:pl-10 sm:pr-2 pt-5 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold dark:text-rose-100/80">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed dark:text-rose-50">
            {description}
          </p>
          <ul className="flex flex-wrap mt-7 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-lg"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className=" hidden sm:block group-hover:scale-[1.04] transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 absolute top-[4.2rem] -right-[13rem] w-[30rem] rounded-t-lg shadow-2xl shadow-slate-950 group-even:right-[initial] group-even:-left-[13rem]"
        />
      </section>
    </motion.div>
  );
};
