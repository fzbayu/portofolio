"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaFigma} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

type ProjectData = {
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

type Props = {
  project: ProjectData;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-[100] p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-6xl h-full max-h-[85vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-black/10 backdrop-blur-md transition-all duration-300"
        >
          <FaXmark size={24} className="text-black" />
        </button>

        {/* IMAGE SECTION */}
        <div className="relative w-full min-h-[280px] md:h-auto md:w-2/3 bg-[#F8F9FA] flex items-center justify-center overflow-hidden border-r border-gray-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="relative w-full h-full shadow-2xl overflow-hidden">
                <Image
                  src={project.images[current]}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAV ARROWS */}
          <div className="absolute inset-x-4 flex justify-between z-10 pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              className="pointer-events-auto p-4 bg-white/80 hover:bg-white shadow-lg transition-all active:scale-95"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="pointer-events-auto p-4 bg-white/80 hover:bg-white shadow-lg transition-all active:scale-95"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full md:w-1/3 p-10 flex flex-col overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-black tracking-tighter text-black mb-4">
              {project.title}
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-8">
              {/* TECH STACK */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-orange-500 text-white text-[10px] font-bold uppercase">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">Highlight</h3>
                <div className="space-y-3">
                  {project.features.map((features, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="h-px w-4 bg-orange-500 mt-2.5 transition-all group-hover:w-6" />
                      <p className="text-sm text-gray-700 font-medium">{features}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                  Visit Site <FaExternalLinkAlt size={12} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" className="p-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                  <FaGithub size={20} />
                </a>
              )}
              {/* TOMBOL FIGMA */}
              {project.figma && (
                <a 
                  href={project.figma} 
                  target="_blank" 
                  title="View Design"
                  className="p-4 bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E] hover:text-white transition-all duration-300"
                >
                  <FaFigma size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}