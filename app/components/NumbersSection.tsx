'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MouseBlurEffect from "./MouseBlurEffect";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const NumbersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
  const centerColor = "#f45d4a"; // Color at the center
  const edgeColor = "#C13C27";

  useEffect(() => {
    const texts = gsap.utils.toArray('.bottom-to-top') as HTMLElement[];

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
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
        }
      );
    });

    // GSAP animations for numbers
    const numbers = document.querySelectorAll(".number");

    numbers.forEach((num) => {
      const targetValue = num.getAttribute("data-target");

      gsap.to(num, {
        scrollTrigger: {
          trigger: num,
          start: "bottom 80%",
          end: "top 30%",
          scrub: 1,
          onEnter: () => {
            gsap.to(num, {
              innerHTML: targetValue,
              duration: 1,
              ease: "power1.out",
              snap: { innerHTML: 1 },
              onUpdate: () => {
                num.innerHTML = Math.ceil(Number(num.innerHTML)).toString();
              },
            });
          },
        },
      });
    });
  }, []);

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className="relative numbers-section bg-[#C13C27] px-4 lg:px-8 overflow-hidden"
    >
      {/* Apply the mouse blur effect to the section */}
      <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />

      <div className="bottom-to-top">
        <h1 className='text-white text-4xl md:text-5xl font-medium py-10'>فورس بالأرقام</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Grid Item 1 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top flex number-container text-center">
            <div className="number text-6xl text-white" data-target="40">0</div>
          </div>
          <h2 className="bottom-to-top text-xl text-white">عدد الموظفين</h2>
        </div>

        {/* Grid Item 2 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top flex number-container text-center">
            <div className="number text-6xl text-white" data-target="15">0</div>
          </div>
          <h2 className="bottom-to-top text-xl text-white">عدد العملاء</h2>
        </div>

        {/* Grid Item 3 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item-1">
          <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="2">0</div>
            <h1 className="leter text-6xl text-white">,</h1>
            <div className="number text-6xl text-white" data-target="1">0</div>
          </div>
          <h2 className="bottom-to-top text-xl text-white">عميل محتمل</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Grid Item 1 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top flex number-container text-center">
            <div className="number text-6xl text-white" data-target="500">0</div>
            <h1 className="leter2 text-6xl text-white">+</h1>
          </div>
          <h2 className="bottom-to-top text-xl text-white">المشاريع المنجزة</h2>
        </div>

        {/* Grid Item 2 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">K</h1>
            <div className="number text-6xl text-white" data-target="300">0</div>
          </div>
          <h2 className="bottom-to-top text-xl text-white">عملية تحويل ناجحة</h2>
        </div>

        {/* Grid Item 3 */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 border-item">
          <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="42">0</div>
          </div>
          <h2 className="bottom-to-top text-xl text-white">الإنفاق الإعلاني</h2>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
