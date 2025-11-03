import ProductList from "@/components/display-products/products-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-[#FFFFFF]">
      {/* HERO SECTION */}
      <section>
        <div
          className="px-6 h-[600px] bg-[url('/headphones.png')] bg-cover bg-center flex items-center justify-center
               lg:flex md:px-20 lg:bg-[#0E0E0E] text-[#FFFFFF] md:h-[729px] lg:items-center lg:justify-between gap-4 lg:mx-auto
               md:bg-cover md:bg-center md:bg-no-repeat lg:bg-none relative md:bg-[url('/headphones.png')]"
        >
          {/* content - stays on left on large screens */}
          <div className="md:flex md:flex-col h-full justify-center">
            <div className="max-w-[398px] h-[346px] flex flex-col justify-center md:justify-between z-5 md:mx-auto lg:mx-0">
              <h3 className="text-[14px] text-center md:text-center lg:text-left tracking-[10px] font-normal text-[#FFFFFF]/50 mb-4 md:mb-0">
                NEW PRODUCT
              </h3>
              <div>
                <h1 className="text-[36px] text-center md:text-[56px] md:text-center lg:text-left tracing-[2px] font-bold leading-[40px] md:leading-[58px] mb-6 md:mb-0">
                  XX99 Mark II Headphones
                </h1>
              </div>
              <div>
                <p className="text-[15px] text-center md:text-center lg:text-left leading-[25px] mb-7 md:mb-0">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>

              <button className="w-[160px] h-[48px] mx-auto lg:ml-0 md:mr-auto md:mx-auto text-[13px] tracking-[1px] font-bold bg-[#D87D4A]">
                SEE PRODUCT
              </button>
            </div>
          </div>

          {/* Image - visible only on large screens (flexed on right) */}
          <div className="hidden lg:block">
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
      <div className="px-6 md:px-10 lg:px-20">
        <div className="mt-16 md:mt-40 mb-16 md:mb-20 lg:mt-70">
          <ProductList />
        </div>

        {/* speaker section */}
        <div className="mt-12 h-[600px] py-14 md:mt-40 lg:mt-40 lg:h-[560px] md:h-[720px] bg-[#D87D4A] rounded-[8px] lg:relative lg:flex lg:items-center lg:justify-center
        md:flex md:flex-col md:items-center md:justify-center md:relative md:overflow-hidden">
          
          <div className="absolute -left-[150px] -top-[20px] opacity-50 md:opacity-100 lg:absolute md:absolute md:left-30 md:-top-20 lg:-left-[30px] lg:-top-[20px]">
            <Image
              width={944}
              height={944}
              src="/rings.png"
              alt="ring thingy"
            />
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row md:flex-col justify-between h-full lg:gap-20 md:gap-3 md:py-10 lg:py-0 lg:items-end">
            
            <div className="flex flex-col md:mx-auto lg:h-full md:h-auto lg:justify-end md:justify-center">
              <Image
                src="/big-speaker.png"
                alt="ZX9 Speaker"
                width={410.23}
                height={493}
                className="drop-shadow-2xl w-[172px] h-auto md:w-[300px] md:h-auto lg:w-[410.23px]"
              />
            </div>

            <div className="flex flex-col justify-between text-center bg-transparent w-full max-w-[349px] px-6 gap-6 md:gap-0 lg:w-[349px] lg:h-[303px] md:h-auto md:text-center lg:text-left md:px-8 lg:mb-16">
              <h1 className="text-white text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[40px] md:leading-[58px] tracking-[2px]">
                ZX9
                <br />
                SPEAKER
              </h1>

              <p className="text-white/90 text-[15px] leading-[25px] md:w-[349px] md:h-[75px] md:mt-6 md:mb-6 lg:mt-0 lg:mb-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>

              <button className="bg-[#000000] w-[160px] h-[48px] mx-auto lg:w-[160px] lg:h-[48px] text-[13px] tracking-[1px] hover:bg-gray-800 transition-colors duration-300 md:w-[160px] md:h-[48px] md:mx-auto lg:mx-0">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="h-[320px] my-8 md:my-10 lg:my-10 lg:h-[320px] md:px-10 md:w-[689px] md:h-[320px] bg-[url('/next-speaker.png')] bg-cover bg-center flex flex-col justify-center lg:w-full lg:px-30 rounded-[8px]">
          <div className="px-6 md:px-0 lg:w-[204px] md:w-[204px] md:h-[118px] lg:h-[118px] justify-between flex flex-col">
            <h2 className="text-[28px] text-[#000000] tracking-[2px] font-bold">
              ZX7 SPEAKER
            </h2>

            <button className="bg-transparent border border-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-[#000000] font-bold text-[#000000] hover:text-white transition-colors duration-300">
              SEE PRODUCT
            </button>
          </div>
        </div>

        {/* next */}
        <div className="h-auto flex-col gap-6 my-8 md:my-10 lg:h-[340px] md:h-[320px] flex md:flex-row justify-between">
          <div className="w-full h-[200px] md:h-auto lg:w-[540px] md:w-[339px] rounded-[8px] bg-[url('/pods.png')] bg-cover bg-center"></div>

          <div className="w-full h-[200px] md:h-auto lg:w-[540px] md:w-[339px] rounded-[8px] flex flex-col justify-center px-6 md:px-13 lg:px-30 bg-[#F1F1F1]">
            <div className="w-[247px] h-[118px] justify-between flex flex-col">
              <h2 className="text-[24px] text-[#000000] tracking-[2px] font-bold">
                YX1 EARPHONES
              </h2>

              <button className="bg-transparent border border-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-[#000000] font-bold text-[#000000] hover:text-white transition-colors duration-300">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="my-16 h-auto flex-col-reverse gap-10 md:gap-12 lg:my-40 lg:h-[588px] md:my-10 lg:w-[1110px] md:w-[689px] flex lg:flex-row lg:justify-between lg:items-center md:flex-col-reverse">
          <div className="w-full text-center px-6 md:px-0 lg:w-[445px] md:w-[573px] md:h-[270px] lg:text-left md:text-center md:mx-auto lg:h-[295px] lg:flex lg:flex-col lg:justify-between">
            <h2 className="text-[28px] mb-8 md:mb-0 md:text-[40px] text-[#000000] leading-[38px] md:leading-[44px] tracking-[1px] md:tracking-[1.43px] font-bold">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST </span>
              AUDIO GEAR
            </h2>

            <p className="text-[#000000] text-[15px] md:h-[150px] leading-[25px] opacity-50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className="rounded-[8px] w-full h-[300px] md:w-[689px] md:h-[300px] lg:w-[540px] lg:h-[588px] bg-[url('/user.png')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
}