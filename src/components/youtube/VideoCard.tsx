import React from "react";
import YoutubeCard from "./YoutubeCard";

export default function VideoCard() {
  const video = {
    id: 2,
    title: "Music to relax to while coding?",
    imageUrl:
      "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
    channelLogoUrl:
      "https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/youtube-profile-picture-maker/logo-template-featuring-a-cartoon-character-in-reference-to-cuphead.png",
    channelName: "CodeWhileYouCan",
  };
  const videos = Array(9).fill(video);

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20">
        {videos.map((video, index) => (
          <YoutubeCard
            key={index}
            title={video.title}
            imageUrl={video.imageUrl}
            channelLogoUrl={video.channelLogoUrl}
            channelName={video.channelName}
          />
        ))}
      </div>
    </div>
  );
}
