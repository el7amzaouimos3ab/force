import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, triggerButtonRef }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current && triggerButtonRef.current) {
      const buttonRect = triggerButtonRef.current.getBoundingClientRect();
      const modalRect = modalRef.current.getBoundingClientRect();

      gsap.set(modalRef.current, {
        x: buttonRect.left + buttonRect.width / 2 - modalRect.width / 2,
        y: buttonRect.top + buttonRect.height / 2 - modalRect.height / 2,
        
        scale: 0,
      });

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
      className="fixed inset-0 bg-gray-400 bg-opacity-90 flex justify-center items-center z-[999999]"
      ref={modalRef}
      onClick={onClose}
    >
      <div
        className="bg-black shadow-lg h-[90%] w-[80%] relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative w-full h-full border border-gray-700">
          <iframe
            src="/videos/Force3.mp4" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
        
      </div>

      <button onClick={onClose} className="text-3xl text-white cursor-pointer absolute top-4 left-4 px-4 py-2"> X </button>
      </div>
  );
};

export default Modal;
