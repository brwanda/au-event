import Home from "@/components/homepage/header";
import About from "@/components/homepage/about";
import Highlight from "@/components/homepage/highlight"
import Service from "@/components/homepage/service";
import Footer from "@/components/footer";
import Event from "@/components/homepage/event";
import Historic from "@/components/homepage/historic";
import Blog from "@/components/homepage/blog";
import Parterners from "@/components/homepage/ourparterners"
import Frequent from "@/components/homepage/frequent"
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "AUTHENTIC EVENT - HOME",
  description: "AUTHENTIC EVENT",
};

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Historic />
      <Event />
      <Highlight />
      <Blog />
      <Parterners />
      <Frequent />
      <Footer />

    </>
  )
}

export default HomePage
