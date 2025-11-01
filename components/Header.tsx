import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="container  fixed z-10 bg-[#0E0E0E]  text-[#FFFFFF] ">

      <div className="mx-auto flex items-center justify-evenly w-[1109.83px] py-[32px]   border-b border-[#FFFFFF]/20">

      
      <Image src="/audiophile-logo.png" alt="Brand Logo" width={143} height={25} />

      <ul className="flex tracking-[2px]  w-[429px]  text-[13px] flex-row gap-4 font-bold">
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
            
          
    </div>
  );
}
