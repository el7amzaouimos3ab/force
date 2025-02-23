'use client';
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  Three from './Three';
import AbouteModale from "./AbouteModale";
import MouseBlurEffect from "./MouseBlurEffect";



// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const SecondSection: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
  const centerColor = "#192429"; // Color at the center
  const edgeColor = "#070A0B";


  const [isModalOpen, setModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);  // Create ref for the button

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const texts = gsap.utils.toArray('.bottom-to-top-text1') as HTMLElement[];

    // GSAP animation with ScrollTrigger
    texts.forEach((texts) => {
      gsap.fromTo(
        texts, // target class for the text
        {
          y: 35, // initial position (100px below its final position)
          opacity: 0, // initial opacity (invisible)
        },
        {
          y: 0, // final position (original position)
          opacity: 1, // final opacity (fully visible)
          ease: 'power3.out',
          scrollTrigger: {
            trigger: texts,
            start: 'top bottom', // animation starts when the top of the element is 80% from the top of the viewport
            end: 'bottom bottom', // animation ends when the top of the element reaches 30% of the viewport
            scrub: 1, // smooth scrubbing (animation tied to scroll position)
          },
        }
      );
    });
  }, []);
 
  return (
    <section id='about' className="bg-[#070A0B] relative md:flex md:items-center md:justify-between px-4 lg:px-8 overflow-hidden" ref={sectionRef}>

<MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />
      
      {/* Right Div (Text) */}
      <div className="flex flex-col gap-6 md:w-[50%] text-right">
        <h2 className="bottom-to-top-text1 bg-gradient-to-r to-[#564897] from-[#3dc1f0] inline-block text-transparent bg-clip-text text-4xl/[1.2] md:text-6xl/[1.2] font-semibold">
          تعزيز النجاح الرقمي <br />
          باستخدام حلول التسويق <br />
          المخصصة.
        </h2>

        <p className="bottom-to-top-text1 text-xl/8">
          نؤمن بأن كل مشروع ناجح وقوي في السوق وراءه جُنود مخفية مُتحزمة بـالإبداع والاحترافية والتعاون والابتكار، وهذا سبب من أسباب اختيارنا  لاسم القوة الإبداعية لأننا نملك فريق متكامل، مؤهل، وذو خبرة عالية لديه شغف بأنه يوصل لأبعد نقطة بأفكارك  ويحولها إلى واقع ملموس بالحروف، الصوت، الصورة، والأرقام.
        </p>
        <button
          ref={triggerButtonRef}  // Assign ref to the button so we can get its position
          className=" bottom-to-top-text1 bg-white hover:bg-[#564897] hover:text-white py-2 text-black w-48"
          onClick={openModal}
        >
          اعرف المزيد
        </button>

        {/* Modal Component */}
        <AbouteModale isOpen={isModalOpen} onClose={closeModal} triggerButtonRef={triggerButtonRef} />
      </div>

      {/* Left Div (Logo) */}
      <div className="bottom-to-top-text1 md:w-[50%] flex justify-center overflow-hidden">
        <Three />
      </div>
    </section>
  );
};

export default SecondSection;
