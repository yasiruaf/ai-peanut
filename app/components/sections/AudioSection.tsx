"use client";

import { useState } from "react";
import Image from "next/image";

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
    {
      imgSrc: "/Images/cat.png",
      audioSrc: "/Alvin_Voice/10_You_missed_peanut_d_113.mp3",
    },
  ];

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlayAudio = (audioSrc: string) => {
    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(audioSrc);
    setAudio(newAudio);

    newAudio.play();
  };

  return (
    <section className="min-h-screen bg-[#141414] flex flex-col justify-center items-center border-t-[1px] border-gray-700">
      <h2 className="text-center text-white font-bold text-5xl mt-12">Play Audio</h2>
      <div className="flex flex-wrap items-center ml-10">
        {items.map((item, index) => (
          <div key={index} onClick={() => handlePlayAudio(item.audioSrc)}>
            <Image
              src={item.imgSrc}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AudioSection;
