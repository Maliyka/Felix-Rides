"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  name: string;
  review: string;
};

export default function TestimonialCard({ name, review }: TestimonialCardProps) {
  return (
    <motion.article
      className="luxury-card p-6"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="mb-3 flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, idx) => (
          <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Star size={16} fill="currentColor" />
          </motion.div>
        ))}
      </div>
      <p className="text-sm leading-6 text-secondary">&quot;{review}&quot;</p>
      <p className="mt-4 font-heading text-lg">{name}</p>
    </motion.article>
  );
}
