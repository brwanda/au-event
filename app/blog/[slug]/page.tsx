"use client";

import { useState, useEffect } from "react";
import Header from '@/components/folder';
import Footer from '@/components/footer';
import axios from 'axios';
import Image from 'next/image';
import Skeleton from "@/components/skeleton";
import { Metadata } from "next";








const ImagePage: React.FC<{ params: { slug: string } }> = ({ params: { slug } }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Improved media interface with error handling
  interface Media {
    id: number;
    source_url: string; // Ensure this property exists
  }
interface Post {
  id: number;
  title: { rendered: string };
  featured_media: number;
  content: { rendered: string };
  media: Media | string | null; // Allow both Media and string
}
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // Function to fetch media
  const fetchMedia = async () => {
    try {
      const response = await axios.get<Media[]>('https://blog.awm-global.org/wp-json/wp/v2/media');
      return response.data;
    } catch (error) {
      console.error('Error fetching media:', error);
      return []; // Return empty array to avoid errors
    }
  };

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(`https://blog.awm-global.org/wp-json/wp/v2/posts?slug=${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return []; // Return empty array to avoid errors
    }
  };

  // Improved content extraction using regular expressions (optional)
  //const extractContent = (html: string) => {
  //  const cleanedHtml = html.replace(/<[^>]+>/g, ''); // Remove HTML tags
    // return cleanedHtml.trim();
   // };

  // Fetch WordPress posts and media using useEffect
const fetchData = async () => {
  const [postsData, mediaData] = await Promise.all([fetchPosts(), fetchMedia()]);
  const mergedPosts = postsData.map((post) => {
    const media = mediaData.find((mediaItem: Media) => mediaItem.id === post.featured_media);
    return {
      ...post,
      media: media || null,
    };
  });
  setPosts(mergedPosts);
};

useEffect(() => {
  fetchData();
}, []); // Ensure dependency array includes 'slug'

  return (
    <>
      <Header />
    {loading ? <Skeleton /> :
      <>
      {posts.length > 0 && (
        posts.map((post) => (
          <article key={post.id}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <section className="flex flex-col items-center justify-center py-12 px-4" key={post.id}>
                <div className="flex flex-col w-full max-w-6xl justify-between space-y-8 md:space-y-0 md:space-x-8">
                  <div className="w-full flex">
                    {post.media && (
                      <Image
                        src={((post.media as Media).source_url)}
                        alt="Event Stadium"
                        layout="responsive" // Use next/image for optimization
                        width={800} // Adjust width and height as needed
                        height={400}
                        className="object-cover rounded-lg shadow-lg mx-auto" // Use CSS classes for styling
                      />
                    )}
                  </div>
                  <div className="w-full items-center py-5">
                    <div className="text-left">
                      <p className="mt-1 text-3xl font-extrabold sm:text-3xl sm:tracking-tight lg:text-3xl">{post.title.rendered}</p>
                    </div>
                    <div className="text-justify">
                      <p className="mt-4 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        ))
      )}
      </>
}
      <Footer />
    </>
  );
};

export default ImagePage;

// Define an interface for a post object
