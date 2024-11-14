"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";
import { HOME_HERO_SECTION } from "@/app/data/homeHero";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <>
      <section className="bg-[#141414] min-h-screen md:px-20 p-8 flex flex-col justify-center items-center">
        <div className=" w-full h-screen md:aspect-square rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
          <div className="max-w-2xl mx-auto ">
            <div className="mt-12">
              <Image
                src={HOME_HERO_SECTION.mainImage}
                alt=""
                width={1000}
                height={1000}
                className="w-full object-cover"
              />
                <h1 className="text-4xl py-8 items-center text-center">$AiPnut</h1>
            </div>
          </div>
      
        
        </div>
      </section>
      <div className="bg-[#141414] w-full pb-10 md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <p className="text-xl text-gray-500 font-semibold mt-1">
            Contract Address:
          </p>
          <p className="text-white mt-2 text-sm">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
