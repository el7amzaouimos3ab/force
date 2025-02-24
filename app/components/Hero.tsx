// components/Hero.tsx
'use client';

import Image from "next/image";
import React, {  useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

 
const Hero: React.FC = () => {

  const triggerButtonRef = useRef<HTMLButtonElement>(null);




  return (
    <section id="hero" className="hero-section relative w-full h-full">

      

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
          <Image 
            src="/logos/01.gif" 
            alt="work 1" 
            width={1596} 
            height={358}
            unoptimized 
 
          />
        <button ref={triggerButtonRef} className="bg-white  hover:bg-gray-400 px-6 py-2 text-black hover:bg-gray-400px-6 mt-20 md:mt-1 transition-all duration-300" >
          اضغط وابدأ الرحلة   
        </button>
        
      </div>

    </section>
  );
};

export default Hero;
