"use client";
import { useRouter } from 'next/navigation';

const AboutButton = () => {
  const router = useRouter();

  const redirectToGalleryPage = () => {
    router.push('/gallery');
  };

  return (
    <button onClick={redirectToGalleryPage} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded roundnow">GALLERY</button>
  );
};

export default AboutButton;
