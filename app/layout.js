import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import OurValues from "@/components/OurValues/OurValues";
import OurPartners from "@/components/OurPartners/OurPartners";
import OurCrew from "@/components/OurCrew/OurCrew";
import PlanetCard from "@/components/PlanetCard/PlanetCard"; 
import AddWishlistItem from '@/components/destination/AddWishlistItem';


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
        <OurValues />
        <OurPartners />
        <OurCrew />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
