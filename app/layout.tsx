import type { Metadata } from "next";
import { Syncopate, Inter } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real3DX | Crafting Reality",
  description: "High-end VFX Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syncopate.variable} ${inter.variable} antialiased bg-[#050505] text-[#E0E0E0]`}
      >
        {children}
      </body>
    </html>
  );
}
