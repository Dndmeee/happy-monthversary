"use client";

import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Atur volume ke 30%
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, play }}>
      {children}
      <audio
        ref={audioRef}
        src="/audio/song.mp3"
        loop
        controls={false}
        style={{ display: "none" }}
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
