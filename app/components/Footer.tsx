"use client";
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faLinkedin, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { animateTextScroll } from '../utils/gsapAnimations';



export const Footer = () => {

   useEffect(() => {
  
      animateTextScroll();
  
    
    }, []);

  return (
    <footer className='bg-[#070A0B] px-4 lg:px-8'>

      <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 py-14 ">

        <div className="bottom-to-top-text flex flex-wrap items-right justify-center md:justify-start text-right border-item ">
          <FontAwesomeIcon icon={ faSquareFacebook }  className='text-3xl mx-2' color="white" />
          <FontAwesomeIcon icon={ faSquareInstagram }  className='text-3xl mx-2' color="white" />
          <FontAwesomeIcon icon={ faSquareXTwitter }  className='text-3xl mx-2' color="white" />
          <FontAwesomeIcon icon={ faLinkedin }  className='text-3xl mx-2' color="white" />
          <FontAwesomeIcon icon={ faSquareYoutube }  className='text-3xl mx-2' color="white" />
        </div>

        <div className="bottom-to-top-text flex items-left justify-end border-item">
          <Image 
            src="/logos/footer.webp" 
            alt="Image 1" 
            width={400} 
            height={400} 
            className="object-cover mb-4"
          />
        </div>
      </div>

      <hr className="border-t-1 border-gray-700 " />

      <div className=" flex items-center justify-center border-item">
          <h1 className=' text-whit py-2'>شركة فورس © جميع الحقوق محفوظة</h1>
        </div>

    </footer>
  )
}
