import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  imageUrl: string;
  hoverImageUrl: string;
  hoverColor: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function CardComponent({
  imageUrl,
  hoverImageUrl,
  hoverColor,
  children,
  onClick,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center hover:-translate-y-5 transition-transform group duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
