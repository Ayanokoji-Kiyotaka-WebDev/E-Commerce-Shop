import CompoenetsWidthWrapper from "@/components/CompoenetsWidthWrapper";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-slate-50">
      <section>
       
       <CompoenetsWidthWrapper className=
       
       "pb-24 pt-10 lg:grid lg: grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">

        <div className="col-span-2 px-6 lg:px-0 lg:pt-4" >
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">

            <div className="absolute w-28 left-0 -top-20 hidden lg:block">

            <Image 
      src="/logo-wiza.jpg" 
      alt="Wiza Logo" 
      className="full" 
      width={50} 
      height={50} 
    />
                </div>

                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image On a <span className="bg-green-400 px-2 text-white">Custom</span>Phone📱</h1>
                <p className="mt-8 text-lg  lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eveniet molestias maiores dolor cum recusandae maxime veritatis? Itaque, ea pariatur eius sequi expedita magnam iste non, asperiores rerum eaque illum.</p>
          </div>

        </div>

       </CompoenetsWidthWrapper>
      </section>

    </div>
  )
}
