"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initail: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mt-[5rem] mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initail"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="dark:bg-rose-950/60 bg-gray-200  border dark:border-red-950/[0.1] rounded-lg px-3 py-1"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
