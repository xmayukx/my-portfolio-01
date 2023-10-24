"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://scontent.fccu2-3.fna.fbcdn.net/v/t39.30808-6/343446542_2261125667408672_5147025850231075617_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YDF1wk_BVLAAX89rBOl&_nc_ht=scontent.fccu2-3.fna&oh=00_AfA7F6gHr4MsreIJN_58kITYh-4ah3un0t0GCYuXmw67hQ&oe=6536C601"
              alt="mayukh-hazari"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-black shadow-xl group-hover:border-0 transition-all group-hover:w-32 group-hover:h-32"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl group-hover:text-3xl transition-all delay-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              dalay: 0.5,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className=" font-light mb-10 mt-4 text-2xl px-4 !leading-[1.5] sm:text-4xl md:text-3xl"
        >
          I&apos;m <span className="font-bold">Mayukh Hazari</span>, a{" "}
          <span className=" font-medium">Full-stack Web developer</span>{" "}
          passionate about crafting digital experiences that combine innovation
          and functionality.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-x-2 justify-center grid-cols-2 text-lg"
        >
          <Link
            href="#contact"
            className=" group bg-rose-950/30 text-white px-7 py-2 flex items-center gap-2 rounded-3xl outline-none hover:scale-110 hover:bg-rose-950 transition active:scale-95 cursor-pointer"
          >
            <span className="">Contact me here</span>{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />{" "}
          </Link>
          <Link
            target="_blank"
            className=" bg-white text-rose-950 px-7 py-2 flex items-center gap-2 rounded-3xl outline-none hover:scale-110 transition active:scale-95"
            href={
              "https://drive.google.com/file/d/1AlPp-0wU2c0YWzthFUWb8Wj-wEhTMcTM/view"
            }
          >
            My Resume <GrDocumentText className="" />
          </Link>
          <Link
            target="_blank"
            className="bg-white text-rose-950 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border"
            href={"https://www.linkedin.com/in/mayukh-hazari-212276220"}
          >
            <BiLogoLinkedin className="text-xl" />
          </Link>
          <Link
            target="_blank"
            className="bg-white text-rose-950 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border"
            href={"https://www.linkedin.com/in/mayukh-hazari-212276220"}
          >
            {/* <BsLinkedin />{" "} */}
            <FiGithub className="text-xl font-medium" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
