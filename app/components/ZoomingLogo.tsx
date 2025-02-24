'use client';
import Image from "next/image";
import { useEffect } from "react";

import { animateLogoOnScroll, animateTextZoomOnScroll } from '../utils/gsapAnimations';



export default function ZoomingLogo() {
  useEffect(() => {

    animateLogoOnScroll();   
    animateTextZoomOnScroll();

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
            src="/logos/zoom2.svg" 
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
