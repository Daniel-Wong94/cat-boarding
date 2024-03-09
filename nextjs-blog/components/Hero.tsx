import React from "react";
import Image from "next/image";
import LivingRoom from "../../images/living-room.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center">
          Welcome to Pickle & Olive's House
        </h1>
        <h2 className="text-2xl">
          We are one of Astoria's Top Rated Cat Boarders
        </h2>
      </div>
      <Image
        src={LivingRoom}
        alt="wide anlge view of living room"
        width={1120}
        height={631}
        className="rounded-2xl"
      />
    </div>
  );
};

export default Hero;
