import Header from "@/components/header";
import Mission from "@/components/about-us/mission";
import Vision from "@/components/about-us/vision";
import About from "@/components/about-us/about";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Suspense } from 'react';



export const metadata: Metadata = {
  title: "AUTHENTIC EVENT - ABOUT US",
  description: "AUTHENTIC EVENT",
};

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>

      <Header />
      <About />
      <Mission />
      <Vision />
      <Footer />
       </Suspense>
    
    </div>
  )
}

export default HomePage
