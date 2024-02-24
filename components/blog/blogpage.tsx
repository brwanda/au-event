"use client";
// pages/index.js
import { Button } from "@/components/ui/button";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Skeleton from "@/components/blog/skeleton";
import axios from 'axios'; // Import axios for making HTTP requests

export default function Component() {
    interface Media {
    id: number;
    source_url: string; // Ensure this property exists
  }
interface Post {
  id: number;
  title: {
    rendered: string;
  };
  featured_media: number;
  content: {
    rendered: string;
  };
  slug: string;
  media: Media | null; // Assuming you're adding media property
}
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [posts, setPosts] = useState<Post[]>([]);
  // Function to fetch media
  const fetchMedia = async () => {
    try {
      const response = await axios.get('https://blog.awm-global.org/wp-json/wp/v2/media');
      return response.data;
    } catch (error) {
      console.error('Error fetching media:', error);
      return [];
    }
  };

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://blog.awm-global.org/wp-json/wp/v2/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return [];
    }
  };

  // Function to remove HTML tags and extract first 20 words
  const extractContent =  (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || "";
    return text.trim().split(/\s+/).slice(0, 20).join(" ");
  };

  // Fetch WordPress posts and media using useEffect
  const fetchData = async () => {
    const [postsData, mediaData] = await Promise.all([fetchPosts(), fetchMedia()]);
    const mergedPosts = postsData.map((post: Post) => {
      const media = mediaData.find((mediaItem: Media) => mediaItem.id === post.featured_media);
      return {
        ...post,
        media: media || null // Assuming media can be null if not found
      };
    });
    setPosts(mergedPosts);
  };

useEffect(() => {
  fetchData();
}, []);

  return (
    <div className="bg-white py-12">
        {loading ? <Skeleton /> :
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:text-left">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">Blog/News</h3>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">

              {posts.length > 0 && (
        posts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
                      {post.media && (
                        <Image
                          alt=""
                          className="h-48 w-full object-cover"
                          height="192"
                          src={post.media.source_url}
                          style={{
                            aspectRatio: "384/192",
                            objectFit: "cover",
                          }}
                          width="384"
                        />
                      )}
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">{post.title.rendered}</p>
                        <p className="mt-3 text-base text-gray-500">{extractContent(post.content.rendered)}</p>
                      </div>
                      <div className="mt-6">
                       <Link href={`/blog/${post.slug}`}><Button className="w-full btnheader-2 text-white">Read More</Button></Link> 
                      </div>
                    </div>
                  </div>
                
              ))
      )}
            </div>
        
        </div>
      </div>
      }
    </div>
  );
}
