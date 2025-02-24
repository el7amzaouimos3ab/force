
import React from "react";
import ReactLenis from "lenis/react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ImageSwiper from "./components/ImageSwiper";
import NumbersSection from "./components/NumbersSection";
import ZoomingLogo from "./components/ZoomingLogo";
import ContactSection from "./components/ContactSection";
import { Footer } from "./components/Footer";
import ScrollingText from "./components/ScrollingText";
import Test from "./components/Test";
import PartnersSection from "./components/PartnersSection";


export const metadata = {
  title : "Force",
};



export default function Home() {



  return (
    <>

      <ReactLenis root>
        {/* Navbar */}
        <Nav />
        
        {/* Hero Section  */}
        <Hero />

        
        {/* About Section */}
        <SecondSection />
        
        {/* Partners Section */}
        <PartnersSection />

        <Test />
        
        {/* Services Section */}

        <ScrollingText />
        
        {/* Work section */}
        <ImageSwiper/>
        
        {/* Numbers Section */}
        <NumbersSection />
        
        {/* Zooming Logo  */}
        <ZoomingLogo />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <Footer />
      </ReactLenis> 
    </>
  );
}
