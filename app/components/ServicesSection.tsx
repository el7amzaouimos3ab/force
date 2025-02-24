'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from 'react';
import Image from "next/image";
import MouseBlurEffect from "./MouseBlurEffect";


gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null); 
      const centerColor = "#192429"; 
      const edgeColor = "#070A0B";

  useEffect(() => {

const texts = gsap.utils.toArray('.bottom-to-top-text') as HTMLElement[];


    texts.forEach((texts) => {
    
    gsap.fromTo(
      texts, 
      {
        y: 35, 
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texts,
          start: 'top bottom', 
          end: 'bottom bottom', 
          scrub: 1,
        },
      }
    );
  });

}, []);

  return (
    <section id="services" className="relative bg-[#070A0B] section-two pb-10 px-4 lg:px-8 rounded-tr-3xl rounded-tl-3xl overflow-hidden" ref={sectionRef}>


<MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />

      <div>
        <h1 className='bottom-to-top-text text-white text-4xl md:text-5xl font-medium py-10'>خدماتنا</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0">

        <div className="relative flex flex-col items-right text-right md:p-5 border-item ">
          
          <Image 
            src="/services/2.png" 
            alt="Image 2" 
            width={100} 
            height={100} 
            className="bottom-to-top-text object-cover my-4"
          />
          <h2 className="bottom-to-top-text text-[#3DC1F0] text-3xl font-semibold my-6"> تسريع النمو </h2>
          <p className="bottom-to-top-text text-white mb-4">المشهد الرقمي مزدحم. نحن نضمن أن علامتك التجارية لا تكتفي بالبقاء بل تزدهر. تألق مع التسويق الدقيق الذي يجعلك الخيار الأفضل.</p>
          <div className='space-y-2'>
            <p className='bottom-to-top-text text-white'>تطوير الهوية البصرية والعلامة التجارية </p>
            <p className='bottom-to-top-text text-white'> إنشاء المحتوى واستراتيجياته </p>
            <p className='bottom-to-top-text text-white'> حلول الفيديو الإبداعية </p>
            <p className='bottom-to-top-text text-white'> تصميم مواقع ويب متطورة </p>
          </div>
        </div>

        <div className="relative flex flex-col items-right text-right md:p-5 border-item">
          <Image 
            src="/services/1.png" 
            alt="Image 1" 
            width={100} 
            height={100} 
            className="bottom-to-top-text object-cover my-4"
          />
          <h2 className="bottom-to-top-text text-[#CC4539] text-3xl font-semibold my-6"> اصنع تأثيرًا جريئًا </h2>
          <p className="bottom-to-top-text text-white mb-4">نساعدك على رسم هوية مميزة في سوقك. حلول جريئة وإبداعية تضمن أن علامتك التجارية تترك انطباعًا لا يُنسى.</p>
          <div className='space-y-2'>
            <p className='bottom-to-top-text text-white'>تطوير الهوية البصرية والعلامة التجارية </p>
            <p className='bottom-to-top-text text-white'> إنشاء المحتوى واستراتيجياته </p>
            <p className='bottom-to-top-text text-white'> حلول الفيديو الإبداعية </p>
            <p className='bottom-to-top-text text-white'> تصميم مواقع ويب متطورة </p>
          </div>
        </div>

        <div className="relative flex flex-col items-right text-right md:p-5 border-item">
          <Image 
            src="/services/3.png" 
            alt="Image 1" 
            width={100} 
            height={100} 
            className="bottom-to-top-text object-cover my-4"
          />
          <h2 className="bottom-to-top-text text-[#564897] text-3xl font-semibold my-6">تعزيز التقدم </h2>
          <p className="bottom-to-top-text text-white mb-4">تعاون معنا لاكتشاف التكتيكات والأدوات والمنصات المناسبة التي تدفع عملك إلى الأمام وتضعك على مسار النجاح المستدام.</p>
          <div className='space-y-2'>
            <p className='bottom-to-top-text text-white '>تطوير الهوية البصرية والعلامة التجارية </p>
            <p className='bottom-to-top-text text-white '> إنشاء المحتوى واستراتيجياته </p>
            <p className='bottom-to-top-text text-white '> حلول الفيديو الإبداعية </p>
            <p className='bottom-to-top-text text-white'> تصميم مواقع ويب متطورة </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
