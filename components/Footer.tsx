import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between lg:h-[365px] md:h-[400px] md:w-[768px] container md:px-10 lg:px-20 text-[#FFFFFF] py-10 bg-[#101010] ">

      <div className="flex md:flex-col md:py-4 md:gap-4  lg:items-center lg:justify-between lg:py-8">
        <Image
          src="/audiophile-logo.png"
          alt="Brand Logo"
          width={143}
          height={25}
        />

        <ul className="flex tracking-[2px] md:w-[429px] text-[13px] flex-row gap-4 font-bold">
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

      <div className="flex justify-between md:flex-col  h-[100px]">
        <p className="lg:w-[540px] md:w-full text-[#FFFFFF]/50 text-[15px] leading-[25px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

     
        <div className="md:hidden flex flex-col justify-end">
          <div className="flex items-center gap-5 justify-end w-[540px] ">
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

      <div className="flex items-center justify-between">
        <p className="text-[#FFFFFF]/50 text-[15px] leading-[25px]">
          Copyright 2021. All Rights Reserved
        </p>


        <div className="flex flex-col justify-end">
          <div className="flex items-center gap-5 justify-end w-[540px] ">
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
