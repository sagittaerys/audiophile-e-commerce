// "use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import products from "./products";
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-3 gap-10   h-[284px]">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-[#F1F1F1] shadow-md rounded-2xl w-[350px] h-[204px] flex flex-col items-center justify-end"
        >
          {/* Floating Image */}
          <div className="absolute -top-16">
            <Image
              src={product.image}
              alt={product.name}
              width={121.49}
              height={146}
              className="object-contain drop-shadow-2xl "
            />
          </div>

          {/* Product Info */}
          <div className="text-center  text-[#000000]">
            <h3 className="font-bold mt-[196px]  text-[18px] tracing-[1.29px] ">
              {product.name}
            </h3>

            <div className="flex items-center justify-center mb-4 group hover:text-[#D87D4A] transition-colors duration-300">
              <Link
                className="text-[13px] tracking-[1px] transition-all duration-300"
                href={product.link}
              >
                SHOP
              </Link>

              <IoIosArrowForward className="text-[#D87D4A] font-bold ml-2 group-hover:ml-4 transition-all duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
