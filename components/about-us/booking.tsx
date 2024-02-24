import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-1/3 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dxtjjbk95/image/upload/v1708470093/Authentic%20Events/52600418505_36c49735cf_o_qcfgtj.jpg')",
        height:"60vh",
      }}
    >
      <div className="container mx-auto px-6 py-20 h-1/3">
        <div className="container w-full md:w-1/2 px-4 items-center">
          <h2 className="text-5xl font-bold mb-2">Book Your Next Event With Us!</h2>
          <p className="text-lg mb-4">
            Contact us to start planning your next memorable event
          </p>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">Book Now</Button>
        </div>
      </div>
    </section>
  )
}

