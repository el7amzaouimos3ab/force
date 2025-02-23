'use client';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {
  useEffect(() => {

    if (typeof window !== "undefined") {
      // Refresh ScrollTrigger after content is loaded    

      
      // ScrollTrigger for .logo
      gsap.to("#logo", {
        scrollTrigger: {
          trigger: "#logo",
          start: "78% bottom", // Start when the top of .logo hits the top of the viewport
          end: `center top`, // End when the scroll position has moved by one viewport height
          scrub: true, // Sync animation with scroll position
        },
        scale: 20, // Scale animation effect
      });

      // ScrollTrigger for .text-zoom
      gsap.to(".text-zoom", {
        scrollTrigger: {
          trigger: ".text-zoom",
          start: `top 70%`, 
          end: `50% 60%`, // End when the top of .text-zoom reaches 50% of the viewport height
          scrub: true, // Sync animation with scroll position
        },
        opacity: 1, // Fade in effect
        filter: "blur(0px)", // Remove blur
        duration: 0.1, // Smooth transition
      });


      ScrollTrigger.refresh();

    }
    
  }, []);

  return (
    <>
      <div className="bg-[#070A0B] w-full h-[100vh]">
        <section className="main relative flex items-center justify-center w-full h-[100vh] overflow-hidden">

        <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/videos/ZOOM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          
          <Image
            id="logo"
            src="/logos/zoom2.svg" // You can also use import to get a local image.
            alt="Image 1"
            layout="fill"
            style={{ objectFit: 'cover' }}
            className="logo z-40 origin-[50%_52%]"
          />

          <div className="absolute flex justify-center items-center text-center">
            <h1 className="text-zoom text-3xl md:text-4xl w-[95%] md:w-[70%] z-20">
              نحن شغوفون بالابتكار والأفكار الرائعة والتنفيذ الذي يجمع كل ذلك في تجربة واحدة جميلة. إذا كنت كذلك، فاتصل بنا أو أرسل لنا بريدًا إلكترونيًا للبدء.
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
