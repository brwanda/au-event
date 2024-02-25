"use client";
import { useRouter } from 'next/navigation';

const AboutButton = () => {
  const router = useRouter();

  const redirectToOurservice = () => {
    router.push('#Our-services');
  };

  return (
    <button onClick={redirectToOurservice} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded roundnow">Our Service</button>
  );
};

export default AboutButton;
