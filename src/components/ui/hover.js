import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    
    title: " Sat test",
    description:
      "Test Your IQ using this quiz",
    link: "https://learn-link-black.vercel.app/",
  },
  {
    
    title: "Hangman Game",
    description:
      "Check Your vocublary skills using this popular game",
    link: "/hangman",
  },
  {
    
    title: "Memory game",
    description:
      "Test Your memory using this image memory game",
    link: "/memory",
  },
  
  
  

  // ...rest of the projects
];

export default function HoverEffect  ()  {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl -mt-72 ml-52 absolute mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <a href={project.link}>  
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

