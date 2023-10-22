"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-10"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="font-light mb-3">
        I&apos;m Mayukh Hazari, a Full Stack Web Developer based in West Bengal,
        India. My expertise spans TypeScript, Go, React, NextJS, Node.js, Web3,
        and Rust. I&apos;m passionate about creating digital experiences that
        seamlessly combine innovation and functionality. On the frontend, I
        specialize in using React (Next.js) and Tailwind CSS to bring designs to
        life with a focus on both visual appeal and responsiveness. In the
        backend, I leverage Node.js and Go (Gofiber) to build robust and
        scalable systems. My proficiency extends to database management, with
        experience in both MongoDB and PostgreSQL.
      </p>
      <p className="font-light mb-3">
        {" "}
        I&apos;m a firm believer in the importance of continuous learning,
        constantly exploring new technologies to stay at the forefront of web
        development. I&apos;m enthusiastic about collaborating with fellow
        developers, designers, and innovators to create impactful solutions that
        make a difference.
      </p>
    </motion.section>
  );
}
