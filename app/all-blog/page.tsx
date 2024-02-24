import Blogpage from "@/components/blog/blogpage"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "AUTHENTIC EVENT - BLOG / NEWS",
    description: "AUTHENTIC EVENT",
  };
  
export default function Component() {
  return (
    <>
    <Header />
    <Blogpage />
    <Footer />
    </>
    
  )
}

