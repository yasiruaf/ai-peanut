"use client";

import { useState } from "react";
import Image from "next/image";
import { IoPauseCircle, IoPlay } from "react-icons/io5";

const AudioSection = () => {
  const items = [
    {
      imgSrc: "/Images/cat.png", 
      audioSrc: "/Alvin_Voice/1_You_may_have_killed.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/2_I_got_Trump_elected_404.mp3", 
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/3_To_the_moonee_979.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/4_If_you_dont_HOLD_y_976.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/5_Make_the_sound_of_hi_510.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/6_Fuck_no_nut_November_196.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/7_A_I_peanut_means_im_287.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/8_You_really_gonna_sel_863.mp3",
    },
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/9_Suck_on_these_nutsss_837.mp3",
    },
  ];

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const handlePlayAudio = (audioSrc: string, index: number) => {
    if (audio) {
      audio.pause();
      if (isPlaying === index) {
        setIsPlaying(null);
        setAudio(null);
        return;
      }
    }

    const newAudio = new Audio(audioSrc);
    setAudio(newAudio);
    setIsPlaying(index);

    newAudio.play();
    
    newAudio.addEventListener('ended', () => {
      setIsPlaying(null);
      setAudio(null);
    });
  };

  return (
    <section className="min-h-screen py-20  flex flex-col justify-center items-center border-t-[1px] border-gray-700">
      <h2 className="text-center px-4 text-white font-bold text-4xl md:text-5xl mt-12">
      Click to hear from $AiPnut
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="relative" onClick={() => handlePlayAudio(item.audioSrc, index)}>
            <Image
              src={item.imgSrc}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="cursor-pointer"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {isPlaying === index ? (
                <IoPauseCircle className="text-5xl text-black bg-white rounded-3xl p-2 cursor-pointer" />
              ) : (
                <IoPlay className="text-5xl text-black bg-white rounded-3xl p-2 cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AudioSection;