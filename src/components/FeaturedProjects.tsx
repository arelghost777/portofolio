"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useCallback } from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { useIsMobile } from "@/hook/useIsMobile";

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
    tech: ["Next.js", "Tailwind"],
    image: "/ecom.png",
    preview: "https://ps5ecom.vercel.app/",
    links: [
      { icon: <FiGithub />, url: "https://github.com/arelghost777/ecom" },
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
      { icon: <FiGithub />, url: "https://github.com/arelghost777/landing" },
      { icon: <FiExternalLink />, url: "https://landingpage-iota-lovat.vercel.app/" }
    ]
  },
  {
    title: "Flex Wallet (En cours)",
    description: "Flex Wallet est une application web sécurisée permettant aux utilisateurs d'échanger une monnaie fictive entre eux simplement et rapidement. Elle inclut également un dashboard administrateur pour superviser les transactions, gérer les utilisateurs et modérer les échanges.",
    tech: ["Next.js", "Tailwind CSS", "Supabase (PostgreSQL)", "TypeScript"],
    image: "/img2.png",
    preview: "https://flexwallet-ochre.vercel.app/",
    links: [
      { icon: <FiGithub />, url: "https://github.com/arelghost777/demo" },
      { icon: <FiExternalLink />, url: "https://flexwallet-ochre.vercel.app/" }
    ]
  }
];

export default function FeaturedProjects() {
  const isMobile = useIsMobile();
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

  const animationProps = {
    initial: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.5 },
    viewport: { once: true }
  };

  const cardAnimationProps = {
    initial: { opacity: isMobile ? 1 : 0, x: isMobile ? 0 : 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isMobile ? 0 : -20 },
    transition: { duration: isMobile ? 0 : 0.5 }
  };

  return (
    <section id="projets" className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.div {...animationProps} className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Mes <span className="text-blue-500">projets</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Une sélection de mes réalisations les plus significatives
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Flèches de navigation - masquées sur mobile */}
          {!isMobile && (
            <>
              <button 
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:bg-blue-50 dark:hover:bg-neutral-700 transition-all"
                aria-label="Projet précédent"
              >
                <FiChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              
              <button 
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:bg-blue-50 dark:hover:bg-neutral-700 transition-all"
                aria-label="Projet suivant"
              >
                <FiChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </>
          )}

          {/* Carte projet active */}
          <motion.div
            key={current} // Key déplacée ici au lieu d'être dans les props
            {...cardAnimationProps}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
          >
            <div className="h-48 md:h-64 relative overflow-hidden">
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
            
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">{projects[current].title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-3 md:mb-4 text-sm md:text-base">
                {projects[current].description}
              </p>
              
              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                {projects[current].tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 md:px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 md:gap-4">
                {projects[current].links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1 md:py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg transition-colors text-sm md:text-base"
                  >
                    {link.icon}
                    <span>{i === 0 ? "Code" : "Live"}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToProject(i)}
                className={`h-2 w-2 rounded-full transition-all ${i === current ? 'bg-blue-500 w-4 md:w-6' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                aria-label={`Aller au projet ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bouton Voir plus */}
        <motion.div
          initial={{ opacity: isMobile ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: isMobile ? 0 : 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/projets"
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg text-sm md:text-base"
          >
            Voir tous mes projets →
          </a>
        </motion.div>
      </div>
    </section>
  );
}