import Link from "next/link"
import Image from "next/image"

export default function Footer (){
  return(
    <footer className="w-full bg-[#101010] mt-20">
  <div className="container mx-auto flex flex-col items-center justify-between py-8">
          
                
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
                </div>
    </footer>
  )
}