"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";
import { HOME_HERO_SECTION } from "@/app/data/homeHero";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <>
      <section className="bg-[#141414] min-h-screen md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="w-[550px] h-[550px] rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <div className="mt-12">
              <Image
                src={HOME_HERO_SECTION.mainImage}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <BackgroundBeams />
          <h1 className="text-4xl">$AiPnut</h1>
        </div>
      </section>
      <div className="bg-[#141414] pb-10 md:px-20 px-4 flex flex-col justify-center items-center">
        
      <div className="flex items-center gap-x-4">
          <p className="text-xl text-gray-500 font-semibold mt-1">
            Contract Address:
          </p>
          <p className="text-white mt-2">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="flex gap-x-5 mt-5">
          {HOME_HERO_SECTION.otherButtons.map((btn, index) => (
            <div
              key={index}
              className="p-3 border-[1px] rounded-xl border-gray-700"
            >
              <Link href={btn.url}>
                <p className="text-white text-xl">{btn.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
