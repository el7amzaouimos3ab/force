// app/components/ImageSection.tsx
'use client';
import React from 'react';
import Image from "next/image";
import { animateTextScroll } from '../utils/gsapAnimations';
import { useEffect } from 'react';





const PartnersSection: React.FC = () => {

  useEffect(() => {

    animateTextScroll();

  }, []);



  const images = Array.from({ length: 18 }, (_, i) => `/images/${i + 1}.png`);
 
  return (
    <section id='partners' className="relative bg-[#f7fafc] pb-10  px-4 lg:px-8 overflow-hidden" >

      <div>
        <h1 className='bottom-to-top-text text-black text-4xl md:text-5xl font-medium py-10'>شركاؤنا</h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 md:gap-2 rtl">

        {images.map((image, index) => (
          <div key={index} className="bottom-to-top-text relative overflow-hidden">
            <Image 
              src={image} 
              alt={`Image ${index + 1}`}
              width={615} 
              height={432} 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
