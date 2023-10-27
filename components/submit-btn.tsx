"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { RiSendPlaneFill } from "react-icons/ri";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="group font-medium h-[3rem] w-[8rem] dark:bg-gray-800 bg-gray-800/10 dark:text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 dark:hover:bg-gray-900 active:scale-105 disabled:scale-100 disabled:bg-opacity-100"
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 dark:border-white border-black"></div>
        ) : (
          <>
            Submit{" "}
            <RiSendPlaneFill className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
          </>
        )}{" "}
      </button>
    </>
  );
}
