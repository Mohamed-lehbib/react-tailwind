import React from "react";
import { useNavigate } from "react-router-dom";
import YouTubeNavbar from "./YouTubeNavbar";
import YoutubeSideBar from "./YoutubeSideBar";

export default function YoutubePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen relative">
      {/* <div className="flex justify-center items-center h-screen">
      <p className="text-center text-white translate-x-2 duration-150 text-3xl">
        YoutubePage
      </p>
      <button
        className="bg-white text-black right-15 m-5 p-2 rounded relative"
        onClick={() => navigate("/")}
      >
        back
      </button>
      </div> */}
      <YouTubeNavbar icon="images/youtube-svgrepo-com.svg" />
      <div className="absolute left-0 top-0 h-full ml-16">
        <YoutubeSideBar />
      </div>
    </div>
  );
}
