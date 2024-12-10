import React from 'react';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section>
    <div
    style= {{
        backgroundImage: "url('/WebBanner.webp')",
        backgroundSize: "cover",
        height: "500px", // Example: Adjust the height to fit your needs
        width: "100%",  // Ensures it spans the full width
    }}

  className="bg-[url('/WebBanner.webp')] bg-cover bg-center w-full h-[500px] sm:h-[300px] xs:h-[200px]"
>
    </div>

    <p className="bg-[#327053DA] md:whitespace-nowrap md:flex items-center md:px-16 font-bold md:text-lg text-center animate-fadeInColorChange">
  Welcome to Zeeshan Cloth Store. You can also view fabrics original videos by visiting our official YouTube channel.{' '}
  <Link
    href="https://www.youtube.com/@zeeshananis7685"
    className="flex items-center md:ml-1 text-red-900 ml-[160px] "
  >
    Zeeshan Cloth Store <FaYoutube className="ml-1" />
  </Link>
</p>
</section>
  )
}

export default HeroSection;