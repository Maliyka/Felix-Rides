"use client";

import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <motion.div
      className="max-w-2xl text-white"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.p
        className="mb-3 uppercase tracking-[0.2em] text-accent"
        initial={{ opacity: 0, letterSpacing: "0.32em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Driven For You
      </motion.p>
      <h1 className="font-heading text-5xl leading-tight md:text-6xl">Luxury Chauffeur Service in Every Mile</h1>
      <p className="mt-4 text-lg text-white/80">Private airport transfers, executive rides, and bespoke travel in premium comfort.</p>
    </motion.div>
  );
}
