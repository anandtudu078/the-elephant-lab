"use client";
import { motion } from "framer-motion";

interface FadeInCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInCard({ children, className = "", delay = 0 }: FadeInCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}