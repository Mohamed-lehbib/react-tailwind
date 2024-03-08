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
    <div className="hidden md:block fixed left-0 top-24 h-full bg-black py-4 pl-2">
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
    <div className="mb-6 flex flex-col items-center">
      <div className="text-white text-2xl">{icon}</div>
      <span className="text-white text-sm pl-1 mt-2">{text}</span>
    </div>
  );
}
