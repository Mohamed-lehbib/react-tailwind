import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import YouTubeModalSidebar from "./YoutubeModalSidebar";

interface navProps {
  icon: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function YouTubeNavbar({
  icon,
  sidebarOpen,
  setSidebarOpen,
}: navProps) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 flex items-center justify-between z-10">
      {/* YouTube icon and title */}
      <div className="flex items-center space-x-2 ml-1">
        <img
          src={icon}
          alt="YouTube Icon"
          className="md:h-14 md:w-14 h-10 w-10"
        />
        <span className="text-white text-2xl md:text-3xl font-bold">
          YouTube
        </span>
      </div>
      {/* Burger Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <GiHamburgerMenu className="h-6 w-6" />
      </button>
      {/* Sidebar Links */}
      {sidebarOpen && <YouTubeModalSidebar />}
    </nav>
  );
}
