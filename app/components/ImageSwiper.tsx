'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScrollTrigger } from 'gsap/all'; // Import ScrollTrigger

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

gsap.registerPlugin(ScrollTrigger); // Register the GSAP ScrollTrigger plugin

const ImageSwiper: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false); // Track image loading state
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data); // Store the image filenames in the state
    };

    fetchImages();
  }, []);

  // Function to handle image load completion
  const handleImageLoad = () => {
    setIsImagesLoaded(true); // Set the flag to true once images are loaded
  };

  // Trigger GSAP animation for image content after loading
  useEffect(() => {
    if (isImagesLoaded && sectionRef.current) {
      // If images are loaded, refresh the ScrollTrigger to re-evaluate positions
      ScrollTrigger.refresh();

      // Example: Animate the section's opacity and position after images load
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when 80% of the section is visible
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [isImagesLoaded]);

  return (
    <section className='relative bg-[#070A0B] pb-10 overflow-hidden' ref={sectionRef}>
      <div>
        <h1 id='works' className='bottom-to-top-text text-white text-4xl md:text-5xl font-medium py-14 px-4 lg:px-8'>
          أعمالنا
        </h1>
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={`/works/${image}`}
                alt={`work ${index + 1}`}
                width={1080}
                height={1920}
                style={{ objectFit: 'cover' }}
                className="w-full h-auto"
                onLoadingComplete={handleImageLoad} // Trigger the loading complete callback
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSwiper;
