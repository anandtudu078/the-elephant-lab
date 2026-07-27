import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="text-lab-accent">
            <path
              d="M10 30 Q10 15 20 10 Q30 5 32 15 Q34 20 30 25 Q33 25 35 22 L38 25 Q35 30 30 30 Q30 35 20 35 Q10 35 10 30 Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-semibold">Elephant Lab</span>
        </div>
        <nav className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Elephant Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}