import { MyPartern } from '@/parterners';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Component() {
    return (
        <div className="bg-white py-12">
        
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="text-center">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
             <div className="sm:text-left">
               <h3 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">Blog/News</h3>
             </div>
            
           </div>
         </div>
         <div className="mt-10">
           <Carousel>
             <CarouselContent className="-ml-1">

             {
        MyPartern.map((MyPartern, index) => (
                 <CarouselItem key={index} className="pl-1  basis-1/2 md:basis-1/4 lg:basis-1/5 flex flex-col overflow-hidden">
                     <img
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