"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hook/useIsMobile";
import Link from "next/link";
import { useScopedI18n } from "../../../locales/client";

export default function Hero() {

  const t = useScopedI18n("Hero");
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  
  // Effet de parallaxe léger sur le texte au scroll (uniquement desktop)
  const yText = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      
      {/* Background subtil - Remplace Aurora par un grain ou rien du tout pour le pur minimalisme */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <motion.div
        style={{ y: yText, opacity }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-neutral-400 font-medium mb-8 block"
        >
          {t('badge')}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1]"
        >
          Crafting <span className="italic serif text-neutral-500">modern</span> <br />
          web experiences.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base tracking-wide font-light">
            {t('subtitle')}
          </p>
          
          <div className="hidden md:block w-12 h-[1px] bg-neutral-200 dark:bg-neutral-800"></div>

          <Link
            href="#projets"
            className="group relative flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-black dark:text-white"
          >
            {t('cta')}
            <span className="block w-0 h-[1px] bg-black dark:bg-white absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicateur de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 rotate-90 mb-4 origin-left translate-x-1">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-200 to-transparent dark:from-neutral-800"></div>
      </motion.div>

    </section>
  );
}