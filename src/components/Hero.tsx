"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedElephant from "./AnimatedElephant";
import ParticleBackground from "./ParticleBackground";

const phrases = [
  "What problem are you solving today?",
  "Experiment. Learn. Repeat.",
  "Building intelligence together.",
  "Elephant never forgets. Neither does our AI.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timer: NodeJS.Timeout;

    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 50);
      } else {
        timer = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Particle network background */}
      <ParticleBackground />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lab-accent/5 via-transparent to-lab-glow/10 dark:from-lab-accent/20 dark:to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Heading with elephant behind it */}
        <div className="relative inline-block">
          <AnimatedElephant />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative z-10">
            The Elephant Lab
          </h1>
        </div>

        <div className="mt-8 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-8 py-6 font-mono text-lg md:text-2xl shadow-2xl">
          <span className="text-lab-accent mr-2">elephant.ai &gt;</span>
          <span>{text}</span>
          <span className="animate-pulse ml-1">|</span>
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
          We research, build, and scale AI systems that don’t just think—they remember. Your data, our experiments, real results.
        </p>
      </motion.div>
    </section>
  );
}