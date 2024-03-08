import React from "react";

interface YoutubeCardProps {
  title: string;
  imageUrl: string;
  channelLogoUrl: string;
  channelName: string;
}

export default function YoutubeCard({
  title,
  imageUrl,
  channelLogoUrl,
  channelName,
}: YoutubeCardProps) {
  return (
    <div className="bg-black shadow-lg rounded-xl overflow-hidden hover:bg-gray-600 p-2 transform transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="p-4 px-1">
        <div className="flex items-center mb-5">
          <img
            src={channelLogoUrl}
            alt={channelName}
            className="w-10 h-10 mr-3 rounded-full"
          />
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        </div>
        <span className="font-semibold text-gray-400">{channelName}</span>
      </div>
    </div>
  );
}
