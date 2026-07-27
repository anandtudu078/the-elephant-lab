"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Observe",
    description: "We dive deep into your data, goals, and constraints to uncover hidden opportunities.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Experiment",
    description: "Rapid prototyping with the latest models. We test, fail fast, and iterate until it clicks.",
    icon: "🧪",
  },
  {
    number: "03",
    title: "Engineer",
    description: "We build robust, scalable pipelines and fine‑tuned models ready for production.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Deploy & Learn",
    description: "Ship to real users, monitor performance, and continuously improve. The elephant never forgets.",
    icon: "🚀",
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="flex gap-6 items-start mb-16 last:mb-0 relative"
    >
      {/* Vertical line and progress bar */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-lab-accent text-white flex items-center justify-center text-sm font-bold shadow-lg z-10">
          {index + 1}
        </div>
        <div className="w-0.5 h-24 bg-gray-200 dark:bg-gray-700 relative mt-1">
          <motion.div
            style={{ height: progressWidth }}
            className="absolute top-0 left-0 w-0.5 bg-lab-accent origin-top"
          />
        </div>
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-3xl">{step.icon}</span>
          <h3 className="text-2xl font-bold">{step.title}</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          From observation to continuous improvement — our proven process delivers AI that evolves with you.
        </p>
      </motion.div>

      <div className="relative">
        {steps.map((step, i) => (
          <Step key={step.title} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}