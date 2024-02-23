import Header from "@/components/header";
import Mission from "@/components/about-us/mission";
import Vision from "@/components/about-us/vision";
import About from "@/components/about-us/about";
import Footer from "@/components/footer";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "AUTHENTIC EVENT - ABOUT US",
  description: "AUTHENTIC EVENT",
};

function HomePage() {
  return (
    <div>

      <Header />
      <About />
      <Mission />
      <Vision />
      <Footer />
    
    </div>
  )
}

export default HomePage
