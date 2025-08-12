import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "./context/AudioContext";
import PlayButton from "./components/PlayButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Happy Monthversary",
  description: "A special website for us ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} relative`}>
        <AudioProvider>
          {children}
          <PlayButton />
        </AudioProvider>
      </body>
    </html>
  );
}
