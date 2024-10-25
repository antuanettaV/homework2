"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import OurValues from "@/components/OurValues/OurValues";
import OurPartners from "@/components/OurPartners/OurPartners";
import OurCrew from "@/components/OurCrew/OurCrew";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {pathname === "/" && (
          <>
            <OurValues />
            <OurPartners />
            <OurCrew />
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
