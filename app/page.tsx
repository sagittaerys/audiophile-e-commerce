import ProductList from "@/components/display-products/products-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-[#FFFFFF] ">
      
      <section>
        <div className="flex px-20 bg-[#0E0E0E] text-[#FFFFFF] h-[729px] items-center justify-between gap-4 mx-auto">
          <div className="md:max-w-[398px] h-[346px] flex flex-col justify-between">
            <h3 className="text-[14px] tracking-[10px] font-normal ">
              NEW PRODUCT
            </h3>
            <div>
              <h1 className="text-[56px] tracing-[2px] font-bold leading-[58px] ">
                XX99 Mark II Headphones
              </h1>
            </div>
            <div>
              <p className="text-[15px] leading-[25px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>

            <button className="w-[160px] h-[48px] text-[13px] tracking-[1px] font-bold bg-[#D87D4A]">
              SEE PRODUCT
            </button>
          </div>
          <div>
            <Image
              src="/headphones.png"
              width={708}
              height={880}
              alt="hero-image"
            />
          </div>
        </div>
      </section>

      {/* product card */}

      <div className="px-20">
        <div className="mt-70">
          <ProductList />
        </div>

        {/* speaker section */}

        <div className="mt-40  h-[560px] bg-[#D87D4A] rounded-[8px]  relative flex items-center justify-center">
          <div className="absolute -left-[30px] -top-[20px]">
            <Image
              width={944}
              height={944}
              src="/rings.png"
              alt="ring thingy"
            />
          </div>

          <div className="flex justify-between h-full  gap-20 items-center">
            <div className="flex mx-auto flex-col justify-end  h-full">
              <Image
                src="/big-speaker.png"
                alt="ZX9 Speaker"
                width={410.23}
                height={493}
                className="drop-shadow-2xl "
              />
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-between  bg-transparent w-[349px] h-[303px]  ">
              <h1 className="text-white md:text-[56px]  font-bold  leading-[58px] tracking-[2px] ">
                ZX9
                <br />
                SPEAKER
              </h1>

              <p className="text-white/90 text-[15px]  leading-[25px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>

              <button className="bg-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px]  hover:bg-gray-800 transition-colors duration-300">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="h-[320px] my-10 bg-[url('/next-speaker.png')] bg-cover bg-center flex flex-col justify-center  w-full  px-30 rounded-[8px]">
          <div className="w-[204px] h-[118px]   justify-between flex flex-col justify-between">
            <h2 className="text-[28px] text-[#000000] tracking-[2px] font-bold">
              ZX7 SPEAKER
            </h2>

            <button className="bg-transparent border border-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-[#000000] font-bold text-[#000000] hover:text-white  transition-colors duration-300">
              SEE PRODUCT
            </button>
          </div>
        </div>

        {/* next */}
        <div className="h-[340px] flex justify-between  ">
          <div className="w-[540px] rounded-[8px] bg-[url('/pods.png')] bg-cover bg-center"></div>

          <div className="w-[540px] rounded-[8px] flex flex-col justify-center px-30 bg-[#F1F1F1]">
            <div className="w-[247px] h-[118px] justify-between flex flex-col ">
              <h2 className="text-[24px] text-[#000000] tracking-[2px] font-bold">
                YX1 EARPHONES
              </h2>

              <button className="bg-transparent border border-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-[#000000] font-bold text-[#000000] hover:text-white  transition-colors duration-300">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="mt-40 h-[588px] flex justify-between items-center">
          <div className="max-w-[445px] h-[295px] flex flex-col justify-between">
            <h2 className="text-[40px] text-[#000000] leading-[44px] tracking-[1.43px] font-bold ">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST </span>{" "}
              AUDIO GEAR
            </h2>

            <p className="text-[#000000] text-[15px] leading-[25px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className="rounded-[8px] w-[540px] h-[588px] bg-[url('/user.png')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
}
