"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./projectModal";

type Props = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  images: string[];
  link?: string;
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  features,
  image,
  images,
  link,
  github,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="p-6 cursor-pointer hover:scale-105 transition"
      >
        <div className="relative h-80 mb-4 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {description.length > 150 
            ? `${description.substring(0, 150)}...` 
            : description}
        </p>

        <div className="flex gap-2 mt-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-orange-500 text-white px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      

      {open && (
        <ProjectModal
          project={{ title, description, tech, features: [], image, images, link, github }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}