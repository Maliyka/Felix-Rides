"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.article
      className="luxury-card p-6"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div whileHover={{ rotate: -8, scale: 1.08 }} transition={{ duration: 0.25 }}>
        <Icon className="text-accent" />
      </motion.div>
      <h3 className="mt-4 font-heading text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </motion.article>
  );
}
