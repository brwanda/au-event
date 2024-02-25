"use client"

import { MyPartern } from '@/parterners';
import { useEffect, useRef } from 'react';

export default function Component() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
      
        const autoScroll = () => {
          if (container) {
            container.scrollLeft += 2; // Adjust the scrolling speed as needed
      
            // If reached the end, scroll back to the beginning
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
              container.scrollLeft = 0;
            }
          }
        };
      
        // Start auto-scrolling
        const intervalId = setInterval(autoScroll, 50); // Adjust the interval as needed
      
        // Stop auto-scrolling on mouse enter and resume scrolling on mouse leave
        const handleMouseEnter = () => clearInterval(intervalId);
        const handleMouseLeave = () => {
          clearInterval(intervalId);
          intervalId = setInterval(autoScroll, 50); // Resume auto-scrolling
        };
      
        if (container) {
          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);
        }
      
        // Clean up event listeners and interval
        return () => {
          clearInterval(intervalId);
          if (container) {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
          }
        };
      }, []);
    return (
      <section aria-label="Our Affiliates" className="bg-gray-200 py-8">
        <div ref={containerRef} className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold uppercase mb-6">Our Affiliates</h2>
          <div className="flex space-x-2">
          {
        MyPartern.map((MyPartern, index) => (
            <img
              alt={MyPartern}
              className="min-w-[200px]"
              height="100"
              src={MyPartern}
              style={{
                aspectRatio: "200/100",
                objectFit: "contain",
              }}
              width="200"
            />
            ))
        }
           
          </div>
        </div>
      </section>
    )
  }