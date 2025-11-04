import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden flex flex-col justify-between h-auto py-12 px-6 md:py-10 md:px-10 md:h-[400px] md:w-[768px] lg:h-[365px] lg:w-[100%] lg:px-20 container text-[#FFFFFF] bg-[#101010]">

      {/* Logo and Navigation */}
      <div className="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:py-8 md:flex-col md:py-4 md:gap-4">
        <Image
          src="/audiophile-logo.png"
          alt="Brand Logo"
          width={143}
          height={25}
        />

        <ul className="flex flex-col items-center gap-4 md:flex-row tracking-[2px] md:w-[429px] text-[13px] md:gap-6 md:py-4 lg:gap-8 font-bold">
          <Link href="/home">
            <li className="hover:text-[#D87D4A] transition-colors duration-300">
              HOME
            </li>
          </Link>

          <Link href="/headphones">
            <li className="hover:text-[#D87D4A] transition-colors duration-300">
              HEADPHONES
            </li>
          </Link>
          <Link href="/speaker">
            <li className="hover:text-[#D87D4A] transition-colors duration-300">
              SPEAKERS
            </li>
          </Link>
          <Link href="/earphones">
            <li className="hover:text-[#D87D4A] transition-colors duration-300">
              EARPHONES
            </li>
          </Link>
        </ul>
      </div>

      {/* Description and Social Icons (Desktop) */}
      <div className="flex flex-col my-10 gap-12 md:gap-10 lg:justify-between lg:flex-row md:flex-col lg:w-[100%] h-auto md:h-[100px]">

        <p className="text-center md:text-left lg:w-[50%] md:w-full text-[#FFFFFF]/50 text-[15px] leading-[25px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

       
        <div className="md:hidden hidden lg:flex lg:flex-col lg:w-[50%] lg:justify-end">
          <div className="lg:flex lg:items-center gap-5 lg:justify-end">
            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="http://www.github.com/sagittaerys"
            >
              <IoLogoFacebook className="w-[24px] h-[24px]" />
            </Link>

            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="https://x.com/sagittaric?s=21"
            >
              <FaTwitter className="w-[24px] h-[24px]" />
            </Link>

            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="https://www.instagram.com/sagittaerys_?igsh=MTkxbm5xd3NrZGVobA%3D%3D&utm_source=qr"
            >
              <FaInstagram className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright and Social Icons (Mobile/Tablet) */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-0">
        <p className="text-[#FFFFFF]/50 text-center md:text-left md:w-[689px] text-[15px] lg:w-[540px] leading-[25px]">
          Copyright 2021. All Rights Reserved
        </p>

        {/* Social Icons - Mobile/Tablet Only */}
        <div className="flex justify-center md:justify-end lg:hidden">
          <div className="flex items-center gap-5">
            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="http://www.github.com/sagittaerys"
            >
              <IoLogoFacebook className="w-[24px] h-[24px]" />
            </Link>

            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="https://x.com/sagittaric?s=21"
            >
              <FaTwitter className="w-[24px] h-[24px]" />
            </Link>

            <Link
              className="hover:text-[#D87D4A] text-white transition-colors duration-300"
              href="https://www.instagram.com/sagittaerys_?igsh=MTkxbm5xd3NrZGVobA%3D%3D&utm_source=qr"
            >
              <FaInstagram className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}