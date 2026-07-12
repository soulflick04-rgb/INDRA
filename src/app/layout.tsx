import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Digital Museum of the Future | Explore the World of 2050",
  description:
    "Enter an immersive digital museum and explore fictional inventions from 2050, including flying transport, AI hospitals, smart cities, space hotels, and ocean farms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${greatVibes.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
