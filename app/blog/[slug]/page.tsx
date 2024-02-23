"use client";
import Header from '@/components/header'
import Footer from '@/components/footer'
import * as React from "react";
import axios from 'axios';

const ImagePage: React.FC<{ params: { slug: string } }> = ({ params: { slug } }) => {
  
  const [posts, setPosts] = React.useState([]);
  interface Post {
  id: number;
  featured_media: number;
    slug: string;
  // other properties of a post
}

interface Media {
  id: number;
  // other properties of a media item
}


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
      const response = await axios.get(`https://blog.awm-global.org/wp-json/wp/v2/posts?slug=${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return [];
    }
  };

 const extractContent = (html: string) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const text = doc.body.textContent || "";
  return text.trim();
};
  
  // Fetch WordPress posts and media using useEffect
  React.useEffect(() => {
    const fetchData = async () => {
   const [postsData, mediaData] = await Promise.all([fetchPosts(), fetchMedia()]);
   const mergedPosts = postsData.map((post: Post) => {
  const media = mediaData.find(mediaItem => mediaItem.id === post.featured_media);
  return {
    ...post,
    media: media || null // Assuming mediaData may not always have a corresponding media item
  };
});
      setPosts(mergedPosts);
    };
    fetchData();
  }, [slug]); // Make sure to include 'slug' in the dependency array to fetch new data when slug changes

  return (
    <>
      <Header />
      {posts.map(post => (
        <article key={post.id}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
        </div>
        <section className="flex flex-col  items-center justify-center py-12 px-4" key={post.id}>
          <div className="flex flex-col  w-full max-w-6xl justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full flex"> {/* Adjusted here */}
              {post.media && (
                <img
                  alt="Event Stadium"
                  className="object-cover rounded-lg shadow-lg mx-auto"
                  src={post.media.source_url}
                  style={{
                    height: "600px",
                  
                    width: "100%",
                  }}
                />
              )}
            </div>
            <div className="w-full items-center py-5"> {/* Adjusted here */}
            <div className="text-left">
            <p className="mt-1 text-3xl font-extrabold sm:text-3xl sm:tracking-tight lg:text-3xl">{post.title.rendered}</p>
          </div>
              <div className="text-left">
                <p className="mt-4 text-lg text-gray-700">
                  {extractContent(post.content.rendered)}
                </p>
              </div>
            </div>
          </div>
        </section>
        </article>
      ))}
      <Footer />
    </>
  );
};

export default ImagePage;
