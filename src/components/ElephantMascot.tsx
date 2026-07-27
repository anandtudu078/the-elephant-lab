"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ElephantMascot() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      className="relative w-48 h-48 mx-auto cursor-pointer"
    >
      <motion.div style={{ rotateX, rotateY }} className="w-full h-full perspective-1000">
        <svg viewBox="0 0 100 100" className="w-full h-full text-lab-accent drop-shadow-xl">
          {/* Geometric elephant – replace with your final brand SVG */}
          <path
            d="M30 70 Q30 40 50 30 Q70 20 75 40 Q78 50 70 55 Q76 55 80 50 L85 55 Q80 65 70 65 Q70 75 50 75 Q30 75 30 70 Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      </motion.div>
    </div>
  );
}