import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import alpaca from "@/public/alpaca.png";
import dimex from "@/public/dimex.png";
import nft from "@/public/nft-marketplace.png";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub, FiTwitter, FiX } from "react-icons/fi";
export const socials = [
  {
    name: "GitHub",
    link: "https://github.com/xmayukx",
    icon: React.createElement(FiGithub),
  },
  {
    name: "X.com",
    link: "https://twitter.com/xmayuk_hx",
    icon: React.createElement(FaXTwitter),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mayukh-hazari-212276220",
    icon: React.createElement(BiLogoLinkedin),
  },
  {
    name: "Hashnode",
    link: "https://mayukh918.hashnode.dev/",
    icon: React.createElement(FaHashnode),
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Superteam",
    location: "Contributer",
    description:
      "In my role as a Contributor, I actively engage in various initiatives that drive the adoption and development of Web3 solutions. I explore new opportunities, networking with industry leaders, and continuously expanding my knowledge in this rapidly evolving space.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "Oct 2023 - Present",
  },
  {
    title: "Google Developer Student Club",
    location: "Web/App Lead",
    description:
      "As Web/App Lead, I lead the development of the club's website and other web apps.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "Aug 2023 - Present",
  },
  {
    title: "CNCF Hoogly",
    location: "Technical Team Member",
    description:
      "As a Technical Team Member, I actively engage in various initiatives that drive the adoption and development of Cloud Native community. I explore new opportunities, networking with industry leaders, and continuously expanding my knowledge in this rapidly evolving space.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "Aug 2023 - Present",
  },
  {
    title: "GirlScript Summer of Code",
    location: "Contributer",
    description:
      "As a Contributer, I actively engage and contributed to various Open Source projects. I explore new opportunities, networking with industry leaders, and continuously expanding my knowledge in this rapidly evolving space",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "May 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Alpaca",
    description:
      "Transform your PDF reading experience with Alpaca, a web app powered by AI that analyzes your uploaded PDFs.",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "TypeScript",
      "AWS S3",
      "DrizzleORM",
      "PineconeDB",
      "Clerk-Auth",
    ],
    imageUrl: alpaca,
    link: "https://github.com/xmayukx/alpaca",
    deployUrl: "https://alpaca-sigma.vercel.app/",
  },
  {
    title: "Dimex",
    description:
      "Your easy-to-use finance tracker. Monitor income, expenses, savings, budgets, and gain insights for financial success.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "NextAuth",
      "MongoDB",
    ],
    imageUrl: dimex,
    link: "https://github.com/xmayukx/dimex",
    deployUrl: "https://dimex-fawn.vercel.app/",
  },
  {
    title: "Notrox-nft",
    description: "An NFT Market place for NOTROX APEs",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Sanity",
      "Metamask",
      "thirdweb",
      "TypeScript",
      "Web3",
    ],
    imageUrl: nft,
    link: "https://github.com/xmayukx/nft-marketplace",
    deployUrl: "https://nft-marketplace-xmayukx.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "REST API",
  "MongoDB",
  "Go",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
