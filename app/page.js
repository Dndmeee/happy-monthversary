"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.h1
        className="framed-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Happy 5th Monthversary
      </motion.h1>

      <motion.p
        className="framed-paragraph"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        Every day with you feels like a beautiful chapter in the book of my life
        — a story filled with laughter, warmth, and endless moments of joy.
        Thank you for loving me so deeply, for sharing your smile in both the
        sunny and stormy days, and for making my world shine brighter than I
        ever imagined. Together, we’ve created memories that I will cherish
        forever, and I can’t wait to write many more pages of happiness with you
        by my side.
      </motion.p>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="/gallery">📸 Our Gallery</a>
        <a href="/story">📖 Our Story</a>
        <a href="/wishes">💌 Special Wishes</a>
      </motion.nav>
    </main>
  );
}
