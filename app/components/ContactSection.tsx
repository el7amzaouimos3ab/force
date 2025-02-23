'use client';
import { useState, useRef } from 'react';
import MouseBlurEffect from "./MouseBlurEffect";


const ContactSection = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
      const centerColor = "#192429"; // Color at the center
      const edgeColor = "#070A0B";


  // Manage the state for each form field
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle changes in each form input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Normally you would send the form data to a backend here
    console.log('Form submitted with the following data:', formData);

    // You can reset the form after submission if needed
    setFormData({
      name: '',
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <>
    
    <section className='relative bg-[#070A0B]  pb-10 px-4 lg:px-8 overflow-hidden' ref={sectionRef}>


    <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />

    <div id='contact' className=' bg-[#070A0B]'>
        <h1 className='bottom-to-top-text1 text-white text-4xl md:text-5xl font-medium py-10'>تواصل معنا</h1>
    </div>
       <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className=" space-y-4 w-[95%] md:w-[50%] justify-center text-left ">
        {/* Name */}
        <div>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bottom-to-top-text1 border bg-transparent border-white text-white p-2 w-full"
            required
            placeholder='الاسم'
          />
        </div>

        {/* Email */}
        <div>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bottom-to-top-text1 border bg-transparent border-white text-white p-2 w-full"
            required
            placeholder='الايمايل'
          />
        </div>


        {/* Phone */}
        <div>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bottom-to-top-text1 border bg-transparent border-white text-white p-2 w-full text-right"
            required
            placeholder='رقم الجوال'
          />
        </div>

        {/* Message */}
        <div>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bottom-to-top-text1 border bg-transparent border-white text-white p-2 w-full"
            rows={4}
            required
            placeholder='أخبرنا عن مشروعك'
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button className="bottom-to-top-text1 bg-white px-6 py-2 text-black hover:bg-gray-400 " >
          اضغط وابدأ الرحلة   
          </button>
        </div>
      </form>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
