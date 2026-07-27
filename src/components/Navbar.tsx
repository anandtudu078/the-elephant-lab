"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="text-lab-accent">
            <path
              d="M10 30 Q10 15 20 10 Q30 5 32 15 Q34 20 30 25 Q33 25 35 22 L38 25 Q35 30 30 30 Q30 35 20 35 Q10 35 10 30 Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-bold text-xl tracking-tight">Elephant Lab</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <button
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}