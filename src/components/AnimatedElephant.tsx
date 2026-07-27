"use client";
import { motion } from "framer-motion";

export default function AnimatedElephant() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.12 }}           // subtle so text remains readable
      transition={{ duration: 1.5 }}
    >
      {/* Wrapper for head bobbing */}
      <motion.div
        className="w-full max-w-2xl"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 300 200"
          className="w-full text-lab-accent dark:text-lab-glow"
          fill="currentColor"
        >
          {/* Head and ear */}
          <motion.path
            d="M180 80 C190 70 210 65 220 70 C230 75 235 90 230 100 C225 110 215 115 210 115 C205 115 200 110 195 100 Z"
            animate={{ d: [
              "M180 80 C190 70 210 65 220 70 C230 75 235 90 230 100 C225 110 215 115 210 115 C205 115 200 110 195 100 Z",
              "M180 80 C190 68 210 63 220 68 C230 73 235 88 230 98 C225 108 215 113 210 113 C205 113 200 108 195 98 Z",
              "M180 80 C190 70 210 65 220 70 C230 75 235 90 230 100 C225 110 215 115 210 115 C205 115 200 110 195 100 Z"
            ] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="origin-center"
          />
          {/* Trunk – animated d attribute for curling */}
          <motion.path
            d="M130 100 C120 120 115 140 120 160 C123 170 130 175 135 170 C140 165 138 155 135 145 C130 130 130 115 135 105"
            animate={{ d: [
              "M130 100 C120 120 115 140 120 160 C123 170 130 175 135 170 C140 165 138 155 135 145 C130 130 130 115 135 105",
              "M130 100 C125 120 118 140 122 160 C125 170 132 175 137 170 C142 165 140 155 137 145 C132 130 135 115 140 105",
              "M130 100 C120 120 115 140 120 160 C123 170 130 175 135 170 C140 165 138 155 135 145 C130 130 130 115 135 105"
            ] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Tusk */}
          <path d="M125 110 C115 115 105 120 100 118" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Eye */}
          <circle cx="170" cy="90" r="2" fill="currentColor" opacity="0.6" />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}