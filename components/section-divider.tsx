"use client";
import { motion } from "framer-motion";
import React from "react";

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="dark:bg-slate-800/50 bg-slate-800/20 my-24 h-16 w-3 rounded-full block"
    ></motion.div>
  );
};
