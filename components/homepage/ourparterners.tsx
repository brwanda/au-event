"use client";

import { MyPartern } from '@/parterners';
import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Component() {

    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
      );

    return (
        <div className="bg-white py-12">
        
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Our Parterns</p>
          <div className="mt-5 max-w-md mx-auto">
           
          </div>
        </div>
         <div className="mt-10">
           <Carousel
             plugins={[plugin.current]}
             onMouseEnter={plugin.current.stop}
             onMouseLeave={plugin.current.reset}
             >
             <CarouselContent className="-ml-1">

             {
        MyPartern.map((MyPartern, index) => (
                 <CarouselItem key={index} className="pl-1  basis-1/2 md:basis-1/4 lg:basis-1/5 flex flex-col overflow-hidden">
                     <img
                     loading="lazy"
              alt={MyPartern}
              className="min-w-[150px]"
              height="100"
              src={MyPartern}
              style={{
                aspectRatio: "150/100",
                objectFit: "contain",
              }}
              width="150"
            />
                 </CarouselItem>
               ))
       }
             </CarouselContent>
           </Carousel>
         </div>
       </div>     
       </div>    
      
         
         
    )
  }