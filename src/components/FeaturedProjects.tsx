"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useCallback } from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  preview: string;
  links: {
    icon: React.ReactNode;
    url: string;
  }[];
};

const projects: Project[] = [
  {
    title: "Plateforme E-commerce",
    description: "Site de vente de console",
    tech: ["Next.js", "Framer-motion", "Tailwind"],
    image: "/ecom.png",
    preview: "https://ps5ecom.vercel.app/",
    links: [
      { icon: <FiGithub />, url: "https://github.com/votreprofil/ecommerce" },
      { icon: <FiExternalLink />, url: "https://ps5ecom.vercel.app/" }
    ]
  },
  {
    title: "Landing page",
    description: "Conception d'une landing page suivant une maquette Figma",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/landing.png",
    preview: "https://landingpage-iota-lovat.vercel.app/",
    links: [
      { icon: <FiGithub />, url: "https://github.com/votreprofil/recettes" },
      { icon: <FiExternalLink />, url: "https://landingpage-iota-lovat.vercel.app/" }
    ]
  },
  {
    title: "Portfolio 3D",
    description: "Galerie immersive Three.js",
    tech: ["Three.js", "GSAP"],
    image: "/img1.jpg",
    preview: "https://landingpage-iota-lovat.vercel.app/",
    links: [
      { icon: <FiGithub />, url: "https://github.com/votreprofil/portfolio-3d" },
      { icon: <FiExternalLink />, url: "https://landingpage-iota-lovat.vercel.app/" }
    ]
  }
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const goToProject = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  return (
    <section id="projets" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-2">
            Mes <span className="text-blue-500">projets</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus significatives
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Flèches de navigation */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:bg-blue-50 dark:hover:bg-neutral-700 transition-all"
            aria-label="Projet précédent"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Carte projet active */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
          >
            <div className="h-64 relative overflow-hidden">
              <LinkPreview url={projects[current].preview}>
                <Image
                  src={projects[current].image}
                  alt={projects[current].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={current === 0}
                />
              </LinkPreview>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{projects[current].title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {projects[current].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[current].tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {projects[current].links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg transition-colors"
                  >
                    {link.icon}
                    <span>{i === 0 ? "Code" : "Live"}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:bg-blue-50 dark:hover:bg-neutral-700 transition-all"
            aria-label="Projet suivant"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToProject(i)}
                className={`h-2 w-2 rounded-full transition-all ${i === current ? 'bg-blue-500 w-6' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                aria-label={`Aller au projet ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bouton Voir plus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/projets"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg"
          >
            Voir tous mes projets →
          </a>
        </motion.div>
      </div>
    </section>
  );
}