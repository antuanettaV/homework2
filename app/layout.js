import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import OurValues from "@/components/ui/OurValues"; 
import OurPartners from "@/components/ui/OurPartners";  
import OurCrew from "@/components/ui/OurCrew";  

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* TASK - React 1 week 1 */}
        {/* Import and use the Footer component here */}
        {/* Footer found in the ui/Footer.js folder */}
        <OurValues />
        <OurPartners />
        <OurCrew />
         <Footer />
          </body>
    </html>
  );
};

export default RootLayout;