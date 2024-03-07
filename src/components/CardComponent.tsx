import React from "react";

interface CardProps {
  imageUrl: string;
  hoverColor: string;
  children?: React.ReactNode;
}

export default function CardComponent({
  imageUrl,
  hoverColor,
  children,
}: CardProps) {
  console.log(hoverColor);
  return (
    <div className="flex flex-col items-center justify-center hover:-translate-y-5 transition-transform">
      <div
        className="bg-white rounded-lg shadow-md p-6 sm:w-36 sm:h-36 w-24 h-24 hover:bg-black"
        // style={{ width: "150px", height: "150px" }}
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
