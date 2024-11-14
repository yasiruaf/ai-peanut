import AudioSection from "./components/sections/AudioSection";
import { HomeHeroSection } from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <div className="border-t py-10 flex items-center justify-center border-gray-700 w-full">
        <div className=" p-8  rounded-lg w-full gap-10 container">
          <h2 className="text-2xl mb-10">About $AiPnut </h2>
          <p className="text-lg">
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
      <AudioSection />
    
      <div className="border-t py-10 flex items-center justify-center border-gray-700 w-full">
        <div className="text-sm p-4 bg-black rounded-lg">
          CA: xxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
    </div>
  );
}
