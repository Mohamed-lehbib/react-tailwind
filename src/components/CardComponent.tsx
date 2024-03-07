import React from "react";

interface CardProps {
  imageUrl: string;
  children?: React.ReactNode;
}

export default function CardComponent({ imageUrl, children }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="bg-white rounded-lg shadow-md p-6"
        style={{ width: "150px", height: "150px" }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain rounded-lg"
          />
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-librefranklin text-center text-gray-400">
          {children}{" "}
        </p>
      </div>
    </div>
  );
}
