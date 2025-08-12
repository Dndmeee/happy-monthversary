"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Wishes.module.css";

export default function Wishes() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>💌 My Words for You</h1>
        <p className={styles.paragraph}>
          I hope one day we will stand together, hand in hand, as husband and
          wife. I believe you will be an amazing mother — full of love,
          patience, and care for our children. You’re not only my partner but my
          best friend and my greatest comfort. With you, I find peace, joy, and
          a home for my heart. Here’s to a lifetime of love, laughter, and
          endless support, side by side. ❤️
        </p>

        <motion.div
          className={styles.backWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/" className={styles.backButton}>
            ⬅ Back to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
