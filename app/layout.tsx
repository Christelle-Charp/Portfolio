import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christelle Charpinet – Portfolio",
  description: "Portfolio de Christelle Charpinet, développeuse web full-stack spécialisée en React, Next.js, Laravel et UX multilingue. Découvrez ses projets, compétences techniques, et parcours de reconversion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} flex bg-black text-white`}>
        {/* Sidebar fixe */}
        <Sidebar />

        {/* Zone principale */}
        <div className="w-full min-h-screen relative">
          {/* Header overlay */}
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}



