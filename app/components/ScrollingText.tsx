'use client';
import React from 'react'
import { useRef } from 'react';
import MouseBlurEffect from "./MouseBlurEffect";


const ScrollingText: React.FC = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
    const centerColor = "#192429"; // Color at the center
    const edgeColor = "#070A0B";


  return (

    <section className='relative  overflow-hidden'  dir='ltr' ref={sectionRef}> 

    <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />


        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#070A0B] via-transparent to-transparent z-10" ></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#070A0B] via-transparent to-transparent z-10"></div>
        <div className='bg-[#070A0B] flex overflow-hidden gap-40 py-20'>




        {/* Wrapping div for the animation */}
        <div className="animate-scroll-left-to-right flex gap-40">

            <div className=" flex gap-10">

                {/* First block of text */}

                <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                    سما
                </p>

                <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                    وابداعنا
                </p>
                
                <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                    ..حدود    
                </p>

                <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                    للعالم  
                </p>
            </div>

            <div className=" flex gap-10">

                {/* First block of text */}

                <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                    سما
                </p>

                <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                    وابداعنا
                </p>
                
                <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                    ..حدود    
                </p>

                <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                    للعالم  
                </p>
            </div>
        </div>


        <div className="animate-scroll-left-to-right flex gap-40">

        <div className=" flex gap-10">

            {/* First block of text */}

            <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                سما
            </p>

            <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                وابداعنا
            </p>

            <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                ..حدود    
            </p>

            <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                للعالم  
            </p>
            </div>

            <div className=" flex gap-10">

            {/* First block of text */}

            <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                سما
            </p>

            <p className='max-w-none text-[#564897] font-extrabold text-9xl w-full'>
                وابداعنا
            </p>

            <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                ..حدود    
            </p>

            <p className='max-w-none text-white font-extrabold text-9xl w-full'>
                للعالم  
            </p>
            </div>

            


        </div>
     


        </div>
    </section>
  )
}

export default ScrollingText;
