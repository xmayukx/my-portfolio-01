"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { socials } from "@/lib/data";
import Social from "./socials";

export default function Intro() {
  const [imageError, setImageError] = useState(false);
  const resumeURL =
    "https://drive.google.com/file/d/1OZoBtN-Um9rJV5-BOHpKnkzL1qPHRJ-g/view?usp=sharing";
  const resumeDoxUrl =
    "https://docs.google.com/document/d/1nHf4hRB4aqrd_l3f03qKry6lcB8yZLLKdd9ErsTOAI0/edit?usp=sharing";
  const handleImageError = () => {
    setImageError(true);
  };
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const imgUrl =
    "https://media.licdn.com/dms/image/D5603AQF9su6z0UBOyA/profile-displayphoto-shrink_400_400/0/1703316872789?e=1708560000&v=beta&t=adcz8aZxIhy89Po4Tv8XaeW03oddYNGqQMDWurecnew";
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
              src={imageError ? "/me2.png" : imgUrl}
              alt="mayukh-hazari"
              width={192}
              height={192}
              quality={95}
              priority={true}
              onError={handleImageError}
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
          className="flex flex-col gap-x-2 gap-y-5 justify-center text-lg"
        >
          <div className="flex gap-x-2 justify-center">
            <Link
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              href="#contact"
              className=" group bg-black/70 text-white px-5 py-2 flex items-center gap-1 rounded-3xl outline-none hover:scale-110 dark:hover:bg-black hover:bg-black transition active:scale-95 cursor-pointer"
            >
              <span className="">Contact me</span>{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />{" "}
            </Link>
            <Link
              target="_blank"
              className=" bg-white/70 text-black  dark:bg-gray-300/10 dark:text-white px-7 py-2 flex items-center gap-2 rounded-3xl outline-none hover:scale-110 transition active:scale-95"
              href={resumeDoxUrl}
            >
              My Resume <HiOutlineDocumentText className="" />
            </Link>
          </div>
          <div className="flex gap-x-2 justify-center">
            {socials.map((social, index) => (
              <React.Fragment key={index}>
                <Social
                  link={social.link}
                  icon={social.icon}
                  name={social.name}
                />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
