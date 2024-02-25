"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Component() {
  const [images, setImages] = useState([
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871360/radioo_uzjtat.png', alt: 'Radio O' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871364/adalogo-1-a9e-1_hgwm6k.png', alt: 'ADA' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871362/image-3_kv8jlw.png', alt: 'AIA' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871361/tvo_pypir7.png', alt: 'O TV' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871359/image-2_lzxpwk.png', alt: 'BK Insurance' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871359/adalogo-1-a9e-3_tm7161.png', alt: 'ZTCC' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871359/adalogo-1-a9e-2_tzgesl.png', alt: 'AWM' },
    { src: 'https://res.cloudinary.com/dxtjjbk95/image/upload/v1708871359/copy-of-logokira-copy-1_rbhdgh.png', alt: 'TC KIRA' },
  ]);

  const containerRef = useRef(null);
  const currentSlideRef = useRef(0);

  useEffect(() => {
    // Ensure containerRef is available before accessing its properties
    if (!containerRef.current) return;

    const intervalId = setInterval(() => {
      const containerWidth = containerRef.current.clientWidth;
      const slideWidth = containerRef.current.firstChild?.clientWidth || 0; // Handle potential missing firstChild

      currentSlideRef.current = (currentSlideRef.current + 1) % images.length;
      containerRef.current.style.transform = `translateX(-${currentSlideRef.current * slideWidth}px)`;
    }, 2000); // Adjust interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section aria-label="Our Affiliates" className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold uppercase mb-6">Our Affiliates</h2>
        <div ref={containerRef} className="flex overflow-x-hidden">
          {images.map((image) => (
            <img
              key={image.alt}
              alt={image.alt}
              className="min-w-[200px]"
              height="100"
              src={image.src}
              style={{ aspectRatio: '200/100', objectFit: 'cover' }}
              width="200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}     
       