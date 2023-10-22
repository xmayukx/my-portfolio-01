import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { SectionDivider } from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
    </main>
  );
}
