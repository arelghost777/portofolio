"use client"; // Nécessaire pour les animations côté client
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconBriefcase, IconMail, IconCode } from "@tabler/icons-react";
import { BackgroundBeams } from "./ui/background-beams";

export default function AttractiveHeader() {


  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);

  const navItems = [
    {
      name: "À propos",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Compétences",
      link: "#competences",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projets",
      link: "#projets",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <>
      {/* Fond avec effet Aurora (d'Aceternity) */}
      <AuroraBackground className="min-md:rounded-b-[50%]">
        <div className="relative z-50">
          {/* Navbar flottante avec effet "glass morphism" */}
          <FloatingNav navItems={navItems} className="max-w-2xl mx-auto border border-white/10 rounded-full bg-white/5 backdrop-blur-md" />

          {/* Titre principal avec animation */}
          <motion.div
          style={{opacity}}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-20 space-y-5 p-3"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
              Développeur <br /> Front-end
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
               Je conçois des interfaces modernes, performantes, responsives et animées avec passion.
            </p>
            <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">
                Contactez moi
            </span>
            </button>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Effet de vagues en dessous (optionnel) */}
      <BackgroundBeams />
    </>
  );
}