import ProductList from "@/components/display-products/products-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-[#FFFFFF] ">
      <section>
        <div
          className="lg:flex  md:px-20 lg:bg-[#0E0E0E] text-[#FFFFFF] h-[729px] lg:items-center lg:justify-between gap-4 lg:mx-auto
               bg-cover bg-center bg-no-repeat lg:bg-none relative bg-[url('/headphones.png')]"
        >
          {/* content - stays on left on large screens */}

          <div className="flex flex-col h-full justify-center ">
            <div className="md:w-[398px]  h-[290px] text-center  md:h-[346px] flex flex-col justify-between   z-5 mx-auto md:mx-auto lg:mx-0">
              <h3 className="text-[14px] md:text-center lg:text-left tracking-[10px] font-normal text-[#FFFFFF]/50">
                NEW PRODUCT
              </h3>
              <div>
                <h1 className="md:text-[56px] text-[36px] lg:text-[56px]  md:text-center lg:text-left tracing-[2px] font-bold leading-[58px]">
                  XX99 Mark II Headphones
                </h1>
              </div>

              <div>
                <p className="text-[15px] md:text-center lg:text-left leading-[25px]">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>

              <button className="w-[160px] h-[48px] lg:ml-0 md:mr-auto md:mx-auto mx-auto text-[13px] tracking-[1px] font-bold bg-[#D87D4A]">
                SEE PRODUCT
              </button>
            </div>
          </div>

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

      <div className="lg:px-20 md:px-10">
        <div className="lg:mt-70 md:mt-40 md:mb-20">
          <ProductList />
        </div>

        {/* speaker section */}

        <div
          className="lg:mt-40 mx-auto lg:h-[560px] h-[600px] w-[327px] mb-10 md:h-[720px] md:w-[689px] lg:w-[100%] bg-[#D87D4A] rounded-[8px] lg:relative lg:flex lg:items-center lg:justify-center
        
        md:flex md:flex-col md:items-center md:justify-center md:relative md:overflow-hidden
        "
        >
          <div className="lg:absolute lg:-left-[30px] absolute   md:absolute md:left-30 md:-top-20 lg:-top-[20px]">
            <Image
              width={944}
              height={944}
              src="/rings.png"
              alt="ring thingy"
            />
          </div>

          <div className="flex flex-col  h-[100%]  lg:flex-row md:flex-col justify-between md:h-full  lg:gap-20 md:gap-3 md:py-10 lg:py-0 lg:items-end">

            <div className="flex flex-col  mx-auto lg:h-full md:h-auto  lg:justify-end md:justify-center">

              <Image
                src="/big-speaker.png"
                alt="ZX9 Speaker"
                width={410.23}
                height={493}
                className="drop-shadow-2xl md:w-[197px] w-[172.25px] h-[207px] md:h-[237px] lg:w-[410.23px]"
              />
            </div>

            <div className="flex flex-col mt-2 md:mx-auto  justify-between md:text-center h-full py-10 bg-transparent lg:w-[349px] lg:h-[303px] h-auto text-center lg:text-left px-8 lg:mb-16">
              <h1 className="text-white lg:text-[56px] w-[280px] text-[36px] md:text-[48px] md:mx-auto font-bold leading-[58px] tracking-[2px]">
                ZX9
                <br />
                SPEAKER
              </h1>

              <p className="text-white/90 text-[15px] leading-[25px] md:w-[349px] md:h-[75px] md:mt-6 md:mb-6 lg:mt-0 lg:mb-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>

              <button className="bg-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-gray-800 transition-colors duration-300 md:w-[160px] md:h-[48px] mx-auto md:mx-auto lg:mx-0">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="lg:h-[320px] w-[327px] my-10 mx-auto h-[320px] md:px-10 md:w-[689px] md:h-[320px] md:my-10 lg:my-10 bg-[url('/next-speaker.png')] bg-cover bg-center flex flex-col justify-center  lg:w-full  lg:px-30 rounded-[8px]">
          <div className="lg:w-[204px] w-[204px] h-[118px]  lg:h-[118px] pl-5  justify-between flex flex-col justify-between">
            <h2 className="text-[23px] text-[#000000] tracking-[2px] font-bold">
              ZX7 SPEAKER
            </h2>

            <button className="bg-transparent border border-[#000000] w-[160px] h-[48px] text-[13px] tracking-[1px] hover:bg-[#000000] font-bold text-[#000000] hover:text-white  transition-colors duration-300">
              SEE PRODUCT
            </button>
          </div>
        </div>

        {/* next */}
        <div className="lg:h-[340px] md:h-[320px] md:my-10 flex justify-between ">
          <div className="lg:w-[540px]  md:w-[339px] rounded-[8px] bg-[url('/pods.png')] bg-cover bg-center"></div>

          <div className="lg:w-[540px] md:w-[339px] rounded-[8px] flex flex-col justify-center  md:px-13 lg:px-30 bg-[#F1F1F1] ">
            <div className="w-[247px] h-[118px] justify-between flex  flex-col">
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
        <div className="lg:my-40 lg:h-[588px] md:my-10 lg:w-[1110px] md:w-[689px] lg:flex lg:justify-between lg:flex-row lg:items-center md:flex-col-reverse md:flex md:gap-12">
          <div className="lg:w-[445px] md:w-[573px]  md:h-[270px] lg:text-left md:text-center md:mx-auto lg:h-[295px] lg:flex lg:flex-col lg:justify-between">
            <h2 className="text-[40px] text-[#000000] leading-[44px] tracking-[1.43px] font-bold ">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST </span>{" "}
              AUDIO GEAR
            </h2>

            <p className="text-[#000000] text-[15px] md:h-[150px]  leading-[25px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className="rounded-[8px] md:w-[689px] md:h-[300px] lg:w-[540px] lg:h-[588px] bg-[url('/user.png')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
}
