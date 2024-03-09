import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Hub",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto bg-[#0F1117] max-w-7xl">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
