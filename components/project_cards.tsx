"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./projectModal";
import { AnimatePresence } from "framer-motion"; // Pastikan sudah install framer-motion

type Props = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  images: string[];
  link?: string;
  github?: string;
  figma?: string;
};

export default function ProjectCard(props: Props) {
  const { title, description, tech, features, image, images, link, github, figma } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group p-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100"
      >
        {/* IMAGE CONTAINER - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video mb-5 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay subtle on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>

        {/* CONTENT */}
        <h3 className="text-2xl font-extrabold tracking-tighter transition-colors group-hover:text-orange-500">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* TECH STACK BUBBLES */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-2.5 py-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300"
            >
              {t}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="text-[10px] font-bold text-gray-400 py-1">+{tech.length - 3}</span>
          )}
        </div>
      </div>

      {/* MODAL WITH ANIMATION PRESENCE */}
      <AnimatePresence>
        {open && (
          <ProjectModal
            project={{ 
              title, 
              description, 
              tech, 
              features, // Sekarang features dikirim dengan benar
              image, 
              images, 
              link, 
              github,
              figma // Pastikan figma diteruskan ke modal
            }}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}