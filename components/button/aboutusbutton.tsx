"use client";
import { useRouter } from 'next/navigation';

const AboutButton = () => {
  const router = useRouter();

  const redirectToAboutUsPage = () => {
    router.push('/about-us');
  };

  return (
    <button onClick={redirectToAboutUsPage} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded roundnow">ABOUT US</button>
  );
};

export default AboutButton;
