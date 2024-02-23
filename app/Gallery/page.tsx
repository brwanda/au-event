import Home from "@/components/header";
import Gallery from "@/components/gallery/gallery";

import Footer from "@/components/footer";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "AUTHENTIC EVENT - GALLERY",
  description: "AUTHENTIC EVENT",
};



function HomePage() {
  return (
    <div>
      <Home />
      <Gallery />
      <Footer />

    </div>
  )
}

export default HomePage
