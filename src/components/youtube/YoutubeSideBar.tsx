import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdHistory, MdVideoLibrary } from "react-icons/md";

interface sidebarLinkProps {
  icon: React.ReactNode;
  text: string;
}

export default function YoutubeSideBar() {
  return (
    <div className="hidden lg:block fixed left-0 top-24 h-full bg-black py-4 pl-1">
      {/* Sidebar Links */}
      <div className="flex flex-col items-center">
        <SidebarLink icon={<AiFillHome size={30} />} text="Accueil" />
        <SidebarLink icon={<SiYoutubeshorts size={30} />} text="Shorts" />
        <SidebarLink icon={<MdSubscriptions size={30} />} text="Abonnements" />
        <SidebarLink icon={<MdVideoLibrary size={30} />} text="Vous" />
      </div>
    </div>
  );
}

function SidebarLink({ icon, text }: sidebarLinkProps) {
  return (
    <div className="mb-6 flex flex-col items-center group">
      <div className="text-white text-2xl">{icon}</div>
      <span className="text-white text-xs pl-1 mt-2 group-hover:text-gray-400">
        {text}
      </span>
    </div>
  );
}
