import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

export default function YouTubeModalSidebar() {
  return (
    <div className="lg:hidden fixed left-0 top-16 h-full bg-black py-4 pl-1 px-5">
      <div className="ml-3 flex flex-col items-start py-4">
        <SidebarLink icon={<AiFillHome size={32} />} text="Accueil" />
        <SidebarLink icon={<SiYoutubeshorts size={32} />} text="Shorts" />
        <SidebarLink icon={<MdSubscriptions size={32} />} text="Abonnements" />
        <SidebarLink icon={<MdVideoLibrary size={32} />} text="Vous" />
      </div>
    </div>
  );
}

interface sidebarLinkProps {
  icon: React.ReactElement;
  text: string;
}

function SidebarLink({ icon, text }: sidebarLinkProps) {
  return (
    <div className="mb-6 flex items-center group">
      <div className="text-white text-2xl mr-2">{icon}</div>
      <span className="text-white text-s pl-1 group-hover:text-gray-400">
        {text}
      </span>
    </div>
  );
}
