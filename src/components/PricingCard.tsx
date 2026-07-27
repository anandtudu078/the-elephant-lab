"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative flex flex-col p-8 rounded-3xl border shadow-lg transition-all duration-300 ${
        highlighted
          ? "border-lab-accent bg-lab-accent/5 dark:bg-lab-accent/10 scale-105"
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-lab-accent/30"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lab-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-5xl font-extrabold">{price}</span>
        {price !== "Custom" && <span className="text-gray-500 dark:text-gray-400 text-lg">/mo</span>}
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm">
            <span className="text-lab-accent mt-0.5">✓</span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
          highlighted
            ? "bg-lab-accent text-white hover:bg-lab-glow"
            : "border border-gray-300 dark:border-gray-700 hover:border-lab-accent hover:text-lab-accent"
        }`}
      >
        Get started
      </Link>
    </motion.div>
  );
}