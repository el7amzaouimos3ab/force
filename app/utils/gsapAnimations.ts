// app/utils/gsapAnimations.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

export const animateTextScroll = () => {
  // Select all elements with the 'bottom-to-top-text' class
  const texts = gsap.utils.toArray('.bottom-to-top-text') as HTMLElement[];

  texts.forEach((text) => {
    gsap.fromTo(
      text,
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
      }
    );
  });
};


//fixed section
export const animatePatternBackground = () => {
    gsap.to(".pattern-bg", {
      scale: 1.5,
      scrollTrigger: {
        trigger: ".zoom-section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });
  };


  //second section image
export const animateSecondSectionImage = () => {
    gsap.to('.imagesecond', {
        filter: 'brightness(100%)', // Full brightness on scroll
        scrollTrigger: {
          trigger:'.imagesecond', // Trigger based on the wrapper div
          start: 'top bottom', // Start when the top of the image enters the bottom of the viewport
          end: 'bottom top', // End when the bottom of the image enters the top of the viewport
          scrub: true, // Smooth transition as you scroll
          toggleActions: 'play reverse play reverse',
          markers: false, // Remove for production
        },
      });
  };



  export const numbersAnimate = () => {
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
  };




  // Utility function for the logo animation
export const animateLogoOnScroll = () => {
    gsap.to("#logo", {
      scrollTrigger: {
        trigger: "#logo",
        start: "78% bottom", 
        end: "center top", 
        scrub: true, 
      },
      scale: 20,
    });
  };
  
  // Utility function for the text zoom animation
  export const animateTextZoomOnScroll = () => {
    gsap.to(".text-zoom", {
      scrollTrigger: {
        trigger: "#logo",
        start: "top top", 
        end: "50% 50%", 
        scrub: true, 
        markers:true,
      },
      opacity: 1,
      filter: "blur(0px)", 
      duration: 0.1, 
    });
  };


  