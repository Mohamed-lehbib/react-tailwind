import React from "react";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

export default function Netflix() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
    <div className="text-white sm:text-6xl text-3xl flex flex-col items-center justify-center">
      <p className="font-raleway font-bold mb-20 text-center">Where to go ?</p>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 ">
        <CardComponent
          imageUrl="images/facebook-black.svg"
          hoverImageUrl="images/facebook-white.svg"
          hoverColor="group-hover:bg-facebook"
        >
          facebook
        </CardComponent>
        <CardComponent
          imageUrl="images/openai.svg"
          hoverImageUrl="images/chatgpt-white.svg"
          hoverColor="group-hover:bg-chatGpt"
        >
          chatgpt
        </CardComponent>
        <CardComponent
          imageUrl="images/netflix-black.svg"
          hoverImageUrl="images/netflix-seeklogo.svg"
          hoverColor="group-hover:bg-netflix"
        >
          netflix
        </CardComponent>
        <CardComponent
          imageUrl="images/youtube-black.svg"
          hoverImageUrl="images/youtube-white.svg"
          hoverColor="group-hover:bg-youtube"
          onClick={() => navigate("/youtube")}
        >
          youtube
        </CardComponent>
        <CardComponent
          imageUrl="images/vector-mind-black.svg"
          hoverImageUrl="images/vector-mind-white.svg"
          hoverColor="group-hover:bg-vectormind"
        >
          vector mind
        </CardComponent>
      </div>
    </div>
    </div>
  );
}
