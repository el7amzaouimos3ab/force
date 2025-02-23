
// Importing React and Next.js related modules
import React from "react";
import ReactLenis from "lenis/react";

// Importing components for different sections of the page
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
        {/* Navigation Bar */}
        <Nav />
        
        {/* Hero Section (First section on the page) */}
        <Hero />

        
        {/* Second Section (Can be a showcase or any other content) */}
        <SecondSection />
        
        {/* Partners Section (Showcase of partners or collaborators) */}
        <PartnersSection />

        <Test />
        
        {/* Services Section (Overview of the services you offer) */}

        <ScrollingText />
        
        {/* Image Swiper (Showcase images with a swiper or carousel) */}
        <ImageSwiper/>
        
        {/* Numbers Section (Showcase important statistics, numbers, etc.) */}
        <NumbersSection />
        
        {/* Zooming Logo (A cool animation or effect on your logo) */}
        <ZoomingLogo />
        
        {/* Contact Section (Form or contact details) */}
        <ContactSection />
        
        {/* Footer (Footer of the page with additional information or links) */}
        <Footer />
      </ReactLenis> 
    </>
  );
}
