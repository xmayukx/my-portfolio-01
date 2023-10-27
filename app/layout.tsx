import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayukh | Personal Portfolio",
  description:
    "Mayukh Hazari is a Software Developer passionate about crafting digital experiences that combine innovation and functionality. With a background in JavaScript, TypeScript, Rust and Go, he thrives in creating dynamic web applications that push boundaries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` transition-all dark:bg-[#03001C] dark:text-opacity-90 bg-slate-50  dark:text-white text-black relative h-[5000px] pt-28 sm:pt-36 ${inter.className}`}
      >
        <div className="dark:bg-[#301E67] bg-[#997bf6]  absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full dark:blur-[10rem] blur-[12rem] sm:w-[68.75rem]"></div>
        <div className="dark:bg-[#3a1313] bg-[#ea7979] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full dark:blur-[10rem] blur-[12rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
