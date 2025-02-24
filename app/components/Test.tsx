'use client';
import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import ServicesSection from './ServicesSection';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Test() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".pattern-bg", {
      scale: 1.5, 
      scrollTrigger: {
        trigger: ".zoom-section",
        start: "top bottom", 
        end: "bottom bottom", 
        scrub: true, 
        markers: false,
      },
    });

  }, []);

  return (
    <ReactLenis root>
      <main>
          <section className=' zoom-section bg-[#3dc1f0] text-white grid place-content-center h-screen sticky top-0 overflow-hidden'>
            <div className='pattern-bg absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1692be_1px,transparent_1px),linear-gradient(to_bottom,#1692be_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_0%,#000_10%,transparent_100%)]'></div>
            <h1 className='bottom-to-top-text1 2xl:text-7xl text-4xl/[1.2] md:text-6xl/[1.2] px-8 md:px-20 font-semibold text-center tracking-tight leading-[120%] z-10'>
              رحلتك للنجاح تبدأ من هنا
            </h1>
            <p className='bottom-to-top-text1 text-xl/8 px-4 md:px-80 text-center mt-6 z-10'>
            نحن في القوة الإبداعية للتسويق لا نعتبرك عميلًا فقط، بل شريكًا حقيقيًا في مسيرتك نحو النجاح. دعنا نضع استراتيجياتنا المتطورة وخبراتنا في خدمتك، لنخلق معًا قصص نجاح ملهمة.
            </p>
          </section>
          <section className='w-full grid place-content-center sticky top-0 rounded-tr-3xl rounded-tl-3xl'>
            <ServicesSection />
          </section>
      </main>
    </ReactLenis>
  );
}
