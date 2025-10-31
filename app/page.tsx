import Image from "next/image";

export default function Home() {
  return (
    <div className="relative px-20  container bg-[#0E0E0E] h-[729px]  text-[#FFFFFF]">

      <div className="flex items-center justify-between gap-4 mx-auto">

        <div className="md:max-w-[398px] h-[346px] flex flex-col justify-between">
          <h3 className="text-[14px] tracking-[10px] font-normal ">NEW PRODUCT</h3>
          <div>
            <h1 className="text-[56px] tracing-[2px] font-bold leading-[58px] ">XX99 Mark II Headphones</h1>
          </div>
          <div>
            <p className="text-[15px] leading-[25px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <button className="w-[160px] h-[48px] text-[13px] tracking-[1px] font-bold bg-[#D87D4A]">SEE PRODUCT</button>
        </div>
        <div>
            <Image src='/headphones.png' width={708} height={880} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
