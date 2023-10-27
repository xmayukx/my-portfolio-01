"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-500 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hazari.mayukh77@gmail.com">
          {" "}
          hazari.mayukh77@gmail.com
        </a>{" "}
        or through the form below.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (fomrData: FormData) => {
          const { data, error } = await sendEmail(fomrData);
          if (error) {
            toast.error("Message could not be sent. Please try again later.", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            return;
          }
          toast.success("Message sent successfully.", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }}
      >
        <input
          placeholder="Your email"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="px-4 h-14 rounded-lg bg-inherit text-inherit p-4 border-2 border-gray-800/90"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="bg-inherit text-inherit h-52 my-3 rounded-lg border-2 border-gray-800/90 p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
