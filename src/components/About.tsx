"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function PersonalAbout() {
  const introWords = [
    { text: "Bonjour,", className: "text-neutral-300" },
    { text: "je", className: "text-neutral-300" },
    { text: "suis", className: "text-neutral-300" },
    { text: "Arel", className: "text-blue-500 font-bold" },
  ];

  const passionText = "Développeur web passionné par la création d'expériences digitales mémorables. Mon credo ? Allier performance technique et élégance visuelle pour des produits qui captivent.";

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Fond étoilé dynamique */}
      <div className="absolute inset-0 -z-10">
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Partie photo avec effet de float */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md lg:w-1/3"
        >
          <div className="absolute -inset-4 rounded-2xl bg-blue-500/10 blur-xl"></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/avatar.jpg" // Remplace par ton image
              width={500}
              height={500}
              alt="Photo de [Ton Prénom]"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -right-6"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-gray-900 text-white flex items-center space-x-2 px-6 py-2"
            >
              <span>👋 Disponible</span>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* Partie texte */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Titre animé */}
          <TypewriterEffectSmooth words={introWords} className="text-left" />

          {/* Bloc citation animée */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative pl-8 border-l-2 border-blue-500/30"
          >
            <div className="absolute text-7xl font-serif top-0 left-0 text-blue-500/20 -mt-4">"</div>
            <p className="text-lg italic text-neutral-400">
                Développeur web passionné par la création d’interfaces modernes et dynamiques.
                J’aime particulièrement travailler avec des outils comme React, Next.js et Tailwind CSS, qui me permettent de construire des applications performantes et élégantes.
                Curieux de nature, je ne cesse jamais d’apprendre. J’aime explorer de nouvelles technologies, relever des défis techniques et progresser à chaque projet.
                Aujourd’hui, je cherche à m’investir dans des projets concrets, collaborer avec d’autres passionnés, et continuer à évoluer dans un environnement stimulant.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}