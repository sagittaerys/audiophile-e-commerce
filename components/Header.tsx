"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
// 1109.83px
  return (
    <div className="fixed left-1/2  top-0 -translate-x-1/2 z-10 w-full max-w-[1400px] bg-[#0E0E0E] text-[#FFFFFF]">

      <div className="mx-auto flex  items-center justify-between w-[88%] py-[32px]  border-b border-[#FFFFFF]/20">

    {/* hamburger icon on tablets and mobiles */}
    <div className="flex items-center gap-4 ">
      <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoCloseSharp size={24} /> : <IoMdMenu size={24} />}
      </button>
      
      <Link href="/">
      
      <Image src="/audiophile-logo.png" alt="Brand Logo" width={143} height={25} />
      </Link>

    </div>

      <ul className="lg:flex lg:tracking-[2px]  md:hidden  lg:w-[429px]  lg:text-[13px] lg:flex-row lg:gap-4 lg:font-bold">
        <Link href="/home">
          <li className="hover:text-[#D87D4A] transition-colors duration-300">HOME</li>
        </Link>

        <Link href="/headphones">
          <li className="hover:text-[#D87D4A] transition-colors duration-300">HEADPHONES</li>
        </Link>
        <Link href="/speaker">
          <li className="hover:text-[#D87D4A] transition-colors duration-300">SPEAKERS</li>
        </Link>
        <Link href="/earphones">
          <li className="hover:text-[#D87D4A] transition-colors duration-300">EARPHONES</li>
        </Link>
      </ul>

      {/* icons */}
      <Link href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[23px] h-[20px] hover:text-[#D87D4A] transition-colors duration-300"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </Link>

        
        </div>

           {/* mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3  lg:text-[13px] font-bold tracking-[2px] bg-[#0E0E0E] px-20">
            <Link href="/" className="block py-2 hover:text-[#D87D4A] transition-colors duration-300">HOME</Link>
            <Link href="/headphones" className="block py-2 hover:text-[#D87D4A] transition-colors duration-300">HEADPHONES</Link>
            <Link href="/speakers" className="block py-2 hover:text-[#D87D4A] transition-color duration-300">SPEAKERS</Link>
            <Link href="/earphones" className="block py-2 hover:text-[#D87D4A] transition-colors duration-300">EARPHONES</Link>
          </div>
        </div>
            
          
    </div>
  );
}
