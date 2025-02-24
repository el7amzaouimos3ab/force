"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface MouseBlurEffectProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  centerColor: string; //  center
  edgeColor: string; 
}

const MouseBlurEffect: React.FC<MouseBlurEffectProps> = ({
  containerRef,
  centerColor,
  edgeColor,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ballRef = useRef<HTMLDivElement | null>(null); // ball

  const size = 700; // Size 

  // update bal position
  const moveBall = useCallback(() => {
    if (ballRef.current) {
      const targetX = position.x - size / 20; 
      const targetY = position.y - size / 20;

      // Smooth movement
      const smoothMove = () => {
        if (!ballRef.current) return; 

        const currentX = parseFloat(ballRef.current!.style.left || "0");
        const currentY = parseFloat(ballRef.current!.style.top || "0");

        
        const newX = currentX + (targetX - currentX) * 0.5;
        const newY = currentY + (targetY - currentY) * 0.5;

       
        ballRef.current!.style.left = `${newX}px`;
        ballRef.current!.style.top = `${newY}px`;

        
        requestAnimationFrame(smoothMove);
      };

      requestAnimationFrame(smoothMove);
    }
  }, [position, size]); 

  //mouse position 
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  // update ball's position
  useEffect(() => {
    moveBall(); 
  }, [moveBall]); 

  return (
    <div
      ref={ballRef}
      className="absolute pointer-events-none rounded-full backdrop-blur-[100px]" 
      style={{
        top: "0px", 
        left: "0px", 
        width: `${size}px`, 
        height: `${size}px`,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${centerColor} 0%, ${edgeColor} 70%)`, 
      }}
    />
  );
};

export default MouseBlurEffect;
