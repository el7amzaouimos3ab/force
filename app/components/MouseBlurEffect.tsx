"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface MouseBlurEffectProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  centerColor: string; // Color at the center of the gradient
  edgeColor: string; // Color at the edge of the gradient
}

const MouseBlurEffect: React.FC<MouseBlurEffectProps> = ({
  containerRef,
  centerColor,
  edgeColor,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ballRef = useRef<HTMLDivElement | null>(null); // To control the ball

  const size = 700; // Size of the blur circle

  // Function to smoothly update the position of the blur ball
  const moveBall = useCallback(() => {
    if (ballRef.current) {
      const targetX = position.x - size / 10; // Center the ball at the cursor
      const targetY = position.y - size / 10;

      // Smooth movement using requestAnimationFrame
      const smoothMove = () => {
        const currentX = parseFloat(ballRef.current!.style.left || "0");
        const currentY = parseFloat(ballRef.current!.style.top || "0");

        // Ease in and out the movement
        const newX = currentX + (targetX - currentX) * 0.1;
        const newY = currentY + (targetY - currentY) * 0.1;

        // Update position
        ballRef.current!.style.left = `${newX}px`;
        ballRef.current!.style.top = `${newY}px`;

        // Continue animation
        requestAnimationFrame(smoothMove);
      };

      requestAnimationFrame(smoothMove);
    }
  }, [position, size]); // Memoize moveBall with position and size as dependencies

  // Track mouse position within the container
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

  // Smoothly update the ball's position when position changes
  useEffect(() => {
    moveBall(); // Call moveBall when position changes
  }, [moveBall]); // Add moveBall as a dependency

  return (
    <div
      ref={ballRef}
      className="absolute pointer-events-none rounded-full backdrop-blur-[100px]" // Apply the blur effect
      style={{
        top: "0px", // initial top position (we'll adjust it dynamically)
        left: "0px", // initial left position (we'll adjust it dynamically)
        width: `${size}px`, // Fixed size of the blur circle
        height: `${size}px`, // Fixed size of the blur circle
        transform: "translate(-50%, -50%)", // Center the blur effect
        background: `radial-gradient(circle, ${centerColor} 0%, ${edgeColor} 70%)`, // Two-color gradient
      }}
    />
  );
};

export default MouseBlurEffect;
