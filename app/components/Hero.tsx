// components/Hero.tsx
'use client';

import Image from "next/image";
import React, {  useRef } from 'react';




 
const Hero: React.FC = () => {

  const triggerButtonRef = useRef<HTMLButtonElement>(null);




  return (
    <section id="hero" className="hero-section relative w-full h-full">

      

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10"></div>

      <div className="absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-center mt-40 md:mt-0 text-white z-20">
          <Image 
            src="/logos/01.gif" 
            alt="Hero" 
            width={550} 
            height={280}
            unoptimized 
            className="max-w-full h-auto"
 
          />
        <button ref={triggerButtonRef} className="bg-white  hover:bg-gray-400 px-6 py-2 text-black hover:bg-gray-400px-6 md:mt-20 md:mt-1 transition-all duration-300" >
          اضغط وابدأ الرحلة   
        </button>
        
      </div>

    </section>
  );
};

export default Hero;
