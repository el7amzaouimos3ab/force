// app/components/ImageSwiper.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";
import { useRef } from "react";
import MouseBlurEffect from "./MouseBlurEffect";
import { animateTextScroll } from '../utils/gsapAnimations';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSwiper: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    animateTextScroll();

    // Fetch the images from the API route
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data); // Store the image filenames in the state
    };

    fetchImages();
  }, []);

  const sectionRef = useRef<HTMLDivElement | null>(null); // section
  const centerColor = "#192429"; // center
  const edgeColor = "#070A0B";

  return (
    <section className='relative bg-[#070A0B] pb-10 overflow-hidden' ref={sectionRef}>
      <MouseBlurEffect containerRef={sectionRef} centerColor={centerColor} edgeColor={edgeColor} />
      
      <div>
        <h1 id='works' className='bottom-to-top-text text-white text-4xl md:text-5xl font-medium py-14 px-4 lg:px-8'>أعمالنا</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 10 },
          640: { slidesPerView: 2.3, spaceBetween: 20 },
          768: { slidesPerView: 3.3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Render SwiperSlides for each image */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={`/works/${image}`}
                alt={`work ${index + 1}`}
                width="1080"
                height="1920"
                style={{ objectFit: 'cover' }}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSwiper;
