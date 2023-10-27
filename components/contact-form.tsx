"use client";
import React from "react";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {
  return (
    <form className="mt-10 flex flex-col" action={sendEmail}>
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
  );
}
