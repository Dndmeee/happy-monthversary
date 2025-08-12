"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./gallery.module.css";

const photos = [
  { src: "/gallery/1.jpg", caption: "Our first date (?) 💖" },
  { src: "/gallery/2.jpg", caption: "Our first trip to bandung 🌸" },
  { src: "/gallery/3.jpg", caption: "The day I fell deeper for you ✨" },
  { src: "/gallery/4.jpg", caption: "Our gym moment 🌅" },
  {
    src: "/gallery/5.jpg",
    caption: "The day you met my big family from my mom 💌",
  },
  { src: "/gallery/6.jpg", caption: "Forever my favorite view ❤️" },
];

export default function GalleryPage() {
  return (
    <div className={styles.galleryWrapper}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        📸 Our Moments
      </motion.h1>

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <motion.img
              src={photo.src}
              alt={`Moment ${index + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.photo}
            />
            <p className={styles.caption}>{photo.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Back */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.backWrapper}
      >
        <Link href="/" className={styles.backButton}>
          ⬅ Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
