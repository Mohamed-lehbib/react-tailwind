import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTubeNavbar from "../components/youtube/YouTubeNavbar";
import YoutubeSideBar from "../components/youtube/YoutubeSideBar";
import VideoCard from "../components/youtube/VideoCard";

export default function YoutubePage() {
  // const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-black min-h-screen relative">
      <YouTubeNavbar
        icon="images/youtube-svgrepo-com.svg"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="absolute left-0 top-0 h-full ml-16">
        <YoutubeSideBar />
      </div>
      <div
        className={
          sidebarOpen ? "fixed inset-0 bg-black opacity-25 z-0" : "md:ml-16"
        }
      >
        <VideoCard />
      </div>
    </div>
  );
}
