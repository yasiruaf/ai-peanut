import Image from "next/image";
import AudioSection from "./components/sections/AudioSection";
import { HomeHeroSection } from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <div className="border-t py-10 flex items-center justify-center border-gray-700 w-full">
        <div className=" p-8  rounded-lg w-full grid md:grid-cols-2 gap-10 container">
          <div>
            <Image className="aspect-auto" src="/cat.png" width={2000} height={2000} alt="aipnut"/>
          </div>
          <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl md:text-left mb-10 w-full">About $AiPnut </h2>
          <p className="text-lg text-center md:text-left">
          AiPnut is a heartfelt tribute to Peanut the Squirrel, who was taken
          from his home but whose legacy will never be forgotten. P’Nut’s Family
          Freedom Farm Animal Sanctuary embodied love, rescuing and caring for
          injured and abandoned animals. Through the power of AI and blockchain,
          AiPnut makes Peanut’s spirit immortal.
          <br />
          <br />
          <br />
          More than a digital memory, AiPnut symbolizes resilience and hope,
          creating an eternal link to Peanut’s mission. Powered by blockchain,
          AiPnut preserves Peanut’s memory, transforming him into an enduring
          symbol of life, freedom, and sanctuary.
          <br />
          <br />
          <br />
          Peanut forever. AiPnut, eternally.
          </p>
          </div>
         
        </div>
      </div>
      <AudioSection />
    
      <div className="border-t py-10 flex items-center justify-center border-gray-700 w-full">
        <div className="text-sm p-4 bg-black rounded-lg">
          CA: 6Y6C4Xx7NF2xY5eTaur1ioCmHsAmHDffskJbic2opump
        </div>
      </div>
    </div>
  );
}
