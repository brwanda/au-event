import { MyPartern } from '@/parterners';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Component() {
    return (
        <div className="bg-[#f8fafc] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">Discover Gallery</h2>
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Last Events</p>
            <div className="mt-5 max-w-md mx-auto">
              <div className="flex justify-center">
                <div className="inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-white bg-black">
                  All
                </div>
              </div>
            </div>
          </div>
          <Carousel>
          <CarouselContent className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-5">
          
            
        
          {
        MyPartern.map((MyPartern, index) => (
            <CarouselItem key={index} className="group relative">
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
            </CarouselItem>
            ))
        }
        </CarouselContent>
        </Carousel>
           
          
        
        </div>
      </div>
         
         
    )
  }