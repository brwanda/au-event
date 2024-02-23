import Home from "@/components/404";

import Footer from "@/components/footer";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "AUTHENTIC EVENT - OVERVIEW",
  description: "AUTHENTIC EVENT",
};


function HomePage() {
  return (
    <div>
      <Home />
      <Footer />

    </div>
  )
}

export default HomePage
