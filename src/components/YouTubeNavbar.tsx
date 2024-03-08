import React from "react";

interface navProps {
  icon: string;
}

export default function YouTubeNavbar({ icon }: navProps) {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black p-4 flex items-center justify-start">
      {/* YouTube icon */}
      <div className="flex items-center space-x-2 ml-2">
        <img
          src={icon}
          alt="YouTube Icon"
          className="md:h-14 md:w-14 h-10 w-10"
        />
        <span className="text-white text-2xl md:text-3xl font-bold">
          YouTube
        </span>
      </div>
    </nav>
  );
}
