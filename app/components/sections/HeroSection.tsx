"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";
import { HOME_HERO_SECTION } from "@/app/data/homeHero";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <>
      <section className="bg-[#000] min-h-screen relative flex flex-col justify-center items-center">
 
        <Image
          src={HOME_HERO_SECTION.mainImage}
          alt=""
          width={1000}
          height={1000}
          className=" object-cover md:absolute right-0 w-[800px]"
        />
        <div className=" w-full container md:z-50 mx-auto  h-full e rounded-2xl gap-2  flex flex-col items-start p-8 justify-center ">
          <h1 className="text-4xl md:text-8xl  items-center text-left">$AiPnut</h1>
          <p className="md:text-2xl"> Peanut forever. AiPnut, eternally.</p>
          <div className="grid w-full grid-cols-1 md:grid-cols-3  mt-5">
             <Link
                
                className="p-3 w-full flex justify-center items-center border-[1px] rounded-xl border-gray-700 hover:bg-gray-900"
                href={"https://jup.ag/swap/6Y6C4Xx7NF2xY5eTaur1ioCmHsAmHDffskJbic2opump-SOL"}
                target="_blank"
              >
               Buy Now
              </Link>
          
          </div>
        </div>
        <BackgroundBeams />
      </section>
      <div className=" w-full pb-10 md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center gap-x-4">
          
          <p className="text-white mt-2 text-[10px] md:text-2xl">
          CA:6Y6C4Xx7NF2xY5eTaur1ioCmHsAmHDffskJbic2opump
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 mt-5">
          {HOME_HERO_SECTION.otherButtons.map((btn, index) => (
            <Link
              key={index}
              className="p-3 w-full flex justify-center items-center border-[1px] rounded-xl border-gray-700"
              href={btn.url}
            >
              {btn.text}
            </Link>
          ))}
        </div>
        
      </div>
    </>
  );
}
