// components/Hero.tsx
'use client';

import Image from "next/image";
import React, { useState, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VideoModale from "./VideoModale";


gsap.registerPlugin(ScrollTrigger);

 
const Hero: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);


    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


  return (
    <section id="hero" className="hero-section relative w-full h-full">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/videos/Force3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10"></div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
          <Image 
            src="/logos/01.gif" // You can also use import to get a local image.
            alt="work 1" 
            width={1596} 
            height={358}
            unoptimized // Disable image optimization for GIFs
 
          />
        <button ref={triggerButtonRef} className="bg-white  hover:bg-gray-400 px-6 py-2 text-black hover:bg-gray-400px-6 mt-20 md:mt-1 transition-all duration-300" onClick={openModal} >
          اضغط وابدأ الرحلة   
        </button>
        
      </div>
      {/* Modal Component */}
      < VideoModale isOpen={isModalOpen} onClose={closeModal} triggerButtonRef={triggerButtonRef} />

    </section>
  );
};

export default Hero;
