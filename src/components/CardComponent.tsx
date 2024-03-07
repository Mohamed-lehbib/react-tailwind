import React, { useState } from "react";

interface CardProps {
  imageUrl: string;
  hoverImageUrl: string;
  hoverColor: string;
  children?: React.ReactNode;
}

export default function CardComponent({
  imageUrl,
  hoverImageUrl,
  hoverColor,
  children,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center hover:-translate-y-5 transition-transform group duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-white rounded-lg shadow-md p-6 sm:w-36 sm:h-36 w-24 h-24 ${hoverColor}`}
      >
        {imageUrl && (
          <img
            src={isHovered ? hoverImageUrl : imageUrl}
            alt=""
            className="w-full h-full object-contain rounded-lg"
          />
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-librefranklin text-center text-gray-400 group-hover:text-white">
          {children}{" "}
        </p>
      </div>
    </div>
  );
}
