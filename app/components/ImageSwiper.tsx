// app/components/ImageSwiper.tsx
'use client';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";
import { useRef } from "react";
import MouseBlurEffect from "./MouseBlurEffect";





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSwiper: React.FC = () => {


  const sectionRef = useRef<HTMLDivElement | null>(null); // section
    const centerColor = "#192429"; // center
    const edgeColor = "#070A0B";
  
  return (
    <>
    <section className='relative bg-[#070A0B] pb-10 overflow-hidden' ref={sectionRef}>

 
    <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />


    <div>
        <h1 id='works' className='bottom-to-top-text1 text-white text-4xl md:text-5xl font-medium py-14  px-4 lg:px-8'>أعمالنا</h1>
      </div>
    <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{

        640: {
          slidesPerView: 1,  
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      className='w-full h-screen'
      
    >
      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image 
          src="/works/1.PNG" 
          alt="work 1" 
          width="1080"
          height="1920"
          style={{ objectFit: 'cover' }}
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/2.PNG" 
          alt="work 2" 
          width="1080"
          height="1920"
          style={{ objectFit: 'cover' }}
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="relative w-full h-full">

        <Image 
          src="/works/3.JPEG"
          alt="work 3" 
          width="1080"
          height="1920"
          style={{ objectFit: 'cover' }}
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/4.JPEG" 
          alt="work 4" 
          width="1080"
          height="1920"
          style={{ objectFit: 'cover' }}
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/5.jpeg" 
          alt="work 5" 
          width="1080"
          height="1920"
          style={{ objectFit: 'cover' }}
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>

    </Swiper>
    </section>
    </>
  );
};

export default ImageSwiper;
