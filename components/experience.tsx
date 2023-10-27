"use client";
import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: theme === "dark" ? "#450a0a" : "#e5e7eb",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "1.2rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.5rem solid #9ca3af" }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className=" font-semibold capitalize">{item.title}</h3>
              <p className=" font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal dark:text-rose-100">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
