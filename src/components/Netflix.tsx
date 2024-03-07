import React from "react";
import CardComponent from "./CardComponent";

export default function Netflix() {
  return (
    <div className="text-white sm:text-6xl text-3xl flex flex-col items-center justify-center">
      <p className="font-raleway font-bold mb-20 text-center">Where to go ?</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 ">
        <CardComponent
          imageUrl="images/facebook-black.svg"
          hoverColor="black"
        >
          facebook
        </CardComponent>
        <CardComponent imageUrl="images/openai.svg" hoverColor="bg-chatGpt">
          chatgpt
        </CardComponent>
        <CardComponent
          imageUrl="images/netflix-black.svg"
          hoverColor="bg-netflix"
        >
          netflix
        </CardComponent>
        <CardComponent
          imageUrl="images/youtube-black.svg"
          hoverColor="bg-youtube"
        >
          youtube
        </CardComponent>
        <CardComponent
          imageUrl="images/vector-mind-black.svg"
          hoverColor="bg-vectormind"
        >
          vector mind
        </CardComponent>
      </div>
    </div>
  );
}
