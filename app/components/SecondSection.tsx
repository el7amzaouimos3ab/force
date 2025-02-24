'use client';
import React, { useEffect, useState, useRef } from 'react';

import AbouteModale from "./AbouteModale";
import MouseBlurEffect from "./MouseBlurEffect";
import Image from 'next/image';
import { animateTextScroll, animateSecondSectionImage } from '../utils/gsapAnimations';





const SecondSection: React.FC = () => {


  
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
  const centerColor = "#192429"; // Color at the center
  const edgeColor = "#070A0B";


  const [isModalOpen, setModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);  // Create ref for the button

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {

    animateTextScroll();

    animateSecondSectionImage();


  }, []);
 
  return (
    <section id='about' className="bg-[#070A0B] flex flex-col-reverse md:flex-row lg:w-full lg:h-full relative md:flex md:items-center md:justify-between py-4 lg:py-8 px-4 lg:px-8 overflow-hidden " ref={sectionRef}>

<MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />
      
      <div className="flex flex-col gap-6 md:w-[50%] text-right">
        <h2 className="bottom-to-top-text bg-gradient-to-r to-[#564897] from-[#3dc1f0] inline-block text-transparent bg-clip-text text-4xl/[1.2] md:text-6xl/[1.2] font-semibold">
          تعزيز النجاح الرقمي <br />
          باستخدام حلول التسويق <br />
          المخصصة.
        </h2>

        <p className="bottom-to-top-text text-xl/8">
          نؤمن بأن كل مشروع ناجح وقوي في السوق وراءه جُنود مخفية مُتحزمة بـالإبداع والاحترافية والتعاون والابتكار، وهذا سبب من أسباب اختيارنا  لاسم القوة الإبداعية لأننا نملك فريق متكامل، مؤهل، وذو خبرة عالية لديه شغف بأنه يوصل لأبعد نقطة بأفكارك  ويحولها إلى واقع ملموس بالحروف، الصوت، الصورة، والأرقام.
        </p>
        <button
          ref={triggerButtonRef}  
          className=" bottom-to-top-text bg-white hover:bg-[#564897] hover:text-white py-2 text-black w-48 mb-4"
          onClick={openModal}
        >
          اعرف المزيد
        </button>

        <AbouteModale isOpen={isModalOpen} onClose={closeModal} triggerButtonRef={triggerButtonRef} />
      </div>

      <div className=" bottom-to-top-text md:w-[50%] flex justify-center w-full h-full">
        <Image 
        
          src="/logos/logoo.svg" 
          alt="work 1" 
          width={400} 
          height={400}
          className=" imagesecond transition-all ease-out duration-300 w-64 md:w-[100%] py-8 "
          style={{ filter: 'brightness(10%)' }} // Initially darkened image

        />
      </div>
    </section>
  );
};

export default SecondSection;
