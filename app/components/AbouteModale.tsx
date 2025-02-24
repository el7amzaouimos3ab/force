import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MouseBlurEffect from "./MouseBlurEffect";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
  }
  
  const AbouteModale: React.FC<ModalProps> = ({ isOpen, onClose, triggerButtonRef }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null); // section
        const centerColor = "#6648aa"; // center color
        const edgeColor = "#805ad5";
  
    useEffect(() => {
      if (isOpen && modalRef.current && triggerButtonRef.current) {
        const buttonRect = triggerButtonRef.current.getBoundingClientRect();
        const modalRect = modalRef.current.getBoundingClientRect();
  
        // Set position for modal from the button
        gsap.set(modalRef.current, {
          x: buttonRect.left + buttonRect.width / 2 - modalRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2 - modalRect.height / 2,
          
          scale: 0,
        });
  
        // Animate modal 
        gsap.to(modalRef.current, {
          duration: 0.9,
          backgroundColor: "#000",
          x: 0, 
          y: 0, 
          scale: 1,
          width: "auto", 
          height: "auto", 
          ease: "expo.in", 
          
        });
      }
    }, [isOpen, triggerButtonRef]);
  
    if (!isOpen) return null;

  return (
    <div
      className=" aboutSection fixed inset-0 bg-gray-400 bg-opacity-90 flex justify-center items-center z-[999999] "
      ref={modalRef}
      onClick={onClose} 
    >
      <div
        className=" bg-[#805ad5] shadow-lg h-full w-full relative overflow-hidden "
        onClick={(e) => e.stopPropagation()}
        style={{ direction: "ltr" }} 
        ref={sectionRef}
      >

        <MouseBlurEffect 
          containerRef={sectionRef} 
          centerColor={centerColor} 
          edgeColor={edgeColor} 
        />

        <div className="flex flex-col gap-8 relative w-full h-full overflow-y-auto justify-center text-white">
          <div className=" flex items-center justify-center border-item">
            <Image 
              src="/logos/footer.webp" 
              alt="Image 1" 
              width={400} 
              height={400} 
              className="img-top object-cover mb-4 px-4 lg:px-8" 
            />
          </div>
          <div>
            <p className="text-2xl px-4 lg:px-8">
              وُلدت فورس من شغف عميق بمساعدة الشركات على النجاح في عالم رقمي متسارع. عملنا مع علامات تجارية محلية ودولية، لكن تركيزنا ظل ثابتًا دائمًا - تحقيق نتائج حقيقية وقابلة للقياس. بصفتنا وكالة تسويق رقمي متكاملة الخدمات مقرها في المملكة العربية السعودية، نحن ندرك التحديات والفرص الفريدة الموجودة في هذا السوق.              
            </p>
          </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 space-y-6 md:space-y-0 px-4 lg:px-8">
                    {/* 1 */}
                    <div className="relative flex flex-col items-center text-center md:p-7 border-item border">
                      
                      <Image 
                        src="/abouts/STRATEGY.gif" 
                        alt="Image 2" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-xl text-white px-5 mb-4">المشهد الرقمي مزدحم. نحن نضمن أن علامتك التجارية لا تكتفي بالبقاء بل تزدهر. تألق مع التسويق الدقيق الذي يجعلك الخيار الأفضل.</p>
                      
                    </div>
            
                    {/*  2 */}
                    <div className="relative flex flex-col items-center text-center md:p-7 border-item border">
                      <Image 
                        src="/abouts/MESSAGE.gif" 
                        alt="Image 1" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-xl text-white px-7 mb-4">نساعدك على رسم هوية مميزة في سوقك. حلول جريئة وإبداعية تضمن أن علامتك التجارية تترك انطباعًا لا يُنسى.</p>
                      
                    </div>
            
                    {/* 3 */}
                    <div className="relative flex flex-col items-center text-center md:p-7 border-item border">
                      <Image 
                        src="/abouts/VISION.gif" 
                        alt="Image 1" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-xl text-white px-7 mb-4">تعاون معنا لاكتشاف التكتيكات والأدوات والمنصات المناسبة التي تدفع عملك إلى الأمام وتضعك على مسار النجاح المستدام.</p>
                      
                    </div>
                  </div>
        </div>

       
        <button onClick={onClose} className="text-3xl text-white cursor-pointer absolute top-4 left-4 px-4 py-2"> X </button>

      </div>
    </div>
  );
};

export default AbouteModale;
