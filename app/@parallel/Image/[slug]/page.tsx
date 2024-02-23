"use client"
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import { MyImgUrl } from '@/newdata';
import { useRouter, usePathname } from "next/navigation";

const ImagePage: React.FC<{ params: { slug: number } }> = ({ params: { slug } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const checkoutpath = "/Image/" + slug;

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };

  if (pathname === checkoutpath) {
    return (
      <div className="modalnow">
        <div className="photo_container">
          <div className="px-3 pt-4 py-3">
            <div className="flex items-center justify-between">
              <button onClick={handleGoBack}><XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" /></button>
            </div>
          </div>
          <Image src={MyImgUrl[slug]} alt={MyImgUrl[slug]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'contain' }} sizes="60vw" priority />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ImagePage;
