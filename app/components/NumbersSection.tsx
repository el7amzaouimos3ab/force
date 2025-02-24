'use client';
import { useEffect, useRef } from "react";

import MouseBlurEffect from "./MouseBlurEffect";
import { animateTextScroll, numbersAnimate } from '../utils/gsapAnimations';



const NumbersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); 
  const centerColor = "#f45d4a";
  const edgeColor = "#C13C27";

  useEffect(() => {

    animateTextScroll();
    numbersAnimate();

  
  }, []);

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className="relative numbers-section bg-[#C13C27] px-4 lg:px-8 overflow-hidden"
    >
      <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />

      <div className="bottom-to-top-text">
        <h1 className='text-white text-4xl md:text-5xl font-medium py-10'>فورس بالأرقام</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top-text flex number-container text-center">
            <div className="number text-6xl text-white" data-target="40">0</div>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">عدد الموظفين</h2>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top-text flex number-container text-center">
            <div className="number text-6xl text-white" data-target="15">0</div>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">عدد العملاء</h2>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top-text flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="2">0</div>
            <h1 className="leter text-6xl text-white">,</h1>
            <div className="number text-6xl text-white" data-target="1">0</div>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">عميل محتمل</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top-text flex number-container text-center">
            <div className="number text-6xl text-white" data-target="500">0</div>
            <h1 className="leter2 text-6xl text-white">+</h1>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">المشاريع المنجزة</h2>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top-text flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">K</h1>
            <div className="number text-6xl text-white" data-target="300">0</div>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">عملية تحويل ناجحة</h2>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top-text flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="42">0</div>
          </div>
          <h2 className="bottom-to-top-text text-xl text-white">الإنفاق الإعلاني</h2>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
