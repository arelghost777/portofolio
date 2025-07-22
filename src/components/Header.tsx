"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconBriefcase, IconMail, IconCode } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useIsMobile } from "@/hook/useIsMobile";
import Link from "next/link";

// Lazy load des éléments non critiques
const BackgroundBeams = dynamic(() => import("./ui/background-beams").then((mod) => mod.BackgroundBeams), {
  ssr: false,
  loading: () => <></>,
});

export default function AttractiveHeader() {
  const isMobile = useIsMobile();
  const {scrollYProgress} = useScroll();
  
  // Désactive les transformations sur mobile
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, isMobile ? 1 : 0.7]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], ["0%", isMobile ? "0%" : "200%"]);

  const navItems = useMemo(()=> [
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
  ], []);

  return (
    <>
      <motion.div
        style={{ borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius }}
        transition={{ duration: isMobile ? 0 : 0.3 }} // Désactive la transition sur mobile
        className="overflow-hidden"
      >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-slate-950" />
      {/* Fond avec effet Aurora (d'Aceternity) */}
        <div className="relative z-50">
          {/* Navbar flottante avec effet "glass morphism" */}
          <FloatingNav navItems={navItems} className="max-w-2xl mx-auto border border-white/10 rounded-full bg-white/5 backdrop-blur-md" />

          {/* Titre principal avec animation conditionnelle */}
          <motion.div
            style={{opacity}}
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : -20 }} // Pas d'animation initiale sur mobile
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.3, delay: isMobile ? 0 : 0.2 }} // Pas de transition sur mobile
            className="text-center space-y-5 p-3 h-[100vh] flex  flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
              Développeur <br /> Front-end
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
              Je conçois des interfaces modernes, performantes, responsives et animées avec passion.
            </p>
            <Link href="#contact">
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-green-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Contactez moi →</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-green-500 to-transparent" />
              </button>
            </Link>
          </motion.div>
        </div>
 

      {/* Effet de vagues en dessous (optionnel) - désactivé sur mobile */}
      <BackgroundBeams />
      </motion.div>
    </>
  );
}