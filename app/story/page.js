"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>📖 Our Journey</h1>
        <p className={styles.paragraph}>
          Five months ago, we embarked on an incredible journey together — one
          filled with laughter, shared dreams, and countless beautiful moments.
          Every day has been a new page in our story, each one more special than
          the last. You’re not just a part of my story, but the most treasured
          chapter that fills my heart with joy and hope. ✨
        </p>
        <p className={styles.paragraph}>
          From the little things to the unforgettable adventures, every moment
          with you has shaped the person I am today. Here’s to us, and to many
          more chapters waiting to be written hand in hand.
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
