"use client";

import { useAudio } from "../context/AudioContext";

export default function PlayButton() {
  const { isPlaying, play } = useAudio();

  if (isPlaying) return null;

  return (
    <button
      onClick={play}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#ffb3cc",
        color: "#660033",
        border: "none",
        borderRadius: "9999px",
        padding: "0.6rem 1.2rem",
        fontWeight: "600",
        cursor: "pointer",
        zIndex: 9999,
      }}
      aria-label="Play romantic music"
    >
      Play Music 🎵
    </button>
  );
}
