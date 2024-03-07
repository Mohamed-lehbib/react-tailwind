import React from "react";
import CardComponent from "./CardComponent";

export default function Netflix() {
  return (
    <div className="text-white text-6xl flex flex-col items-center justify-center">
      <p className="font-raleway font-bold mb-20 text-center">Where to go ?</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
        <CardComponent imageUrl="images/facebook-black.svg">
          facebook
        </CardComponent>
        <CardComponent imageUrl="images/openai.svg">chatgpt</CardComponent>
        <CardComponent imageUrl="images/netflix-black.svg">
          netflix
        </CardComponent>
        <CardComponent imageUrl="images/youtube-black.svg">
          youtube
        </CardComponent>
        <CardComponent imageUrl="images/vector-mind-black.svg">
          vector mind
        </CardComponent>
      </div>
    </div>
  );
}
