import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-1/3 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dxtjjbk95/image/upload/v1708738952/Authentic%20Events/BOOK_NOW_page-0001_mvvdkh.jpg')",
        height:"60vh auto",
      }}
    >
      
      <div className="container mx-auto px-6 py-20 h-1/3 items-center">
        <div className="container w-full md:w-1/2 px-4 ">
          <h2 className="text-6xl font-bold-lg mb-2">Book Your Next Event With Us!</h2>
          <p className="text-2xl mb-4 py-2">
            Contact us to start planning your next memorable event
          </p>
          
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded roundnow">Book Now</Button>
        </div>
      </div>
    </section>
  )
}

