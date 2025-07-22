"use client";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconBrandNextjs, IconBrandTailwind, IconGitBranch, IconCloudUpload } from "@tabler/icons-react";
import { useIsMobile } from "@/hook/useIsMobile";

export default function FrontendSkills() {
  const isMobile = useIsMobile();
  const titleWords = [
    { text: "Ce", className: "text-neutral-400" },
    { text: "que", className: "text-neutral-400" },
    { text: "je", className: "text-neutral-400" },
    { text: "maîtrise", className: "text-blue-500 font-bold" },
    { text: "...", className: "text-neutral-400" },
  ];

  const skills = [
    {
      icon: <IconBrandNextjs className="h-8 w-8 md:h-12 md:w-12 text-[#61DAFB]" />,
      title: "React & Next.js",
      description: "SPA performantes & SSR",
      highlights: [
        "Hooks avancés", 
        "Optimisation des rendus",
        "ISR/SSG"
      ],
      color: "from-[#61DAFB] to-[#0e1729]"
    },
    {
      icon: <IconBrandTailwind className="h-8 w-8 md:h-12 md:w-12 text-[#38BDF8]" />,
      title: "Tailwind CSS",
      description: "Design rapide & responsive",
      highlights: [
        "Dark mode", 
        "Animations",
        "Plugins personnalisés"
      ],
      color: "from-[#38BDF8] to-[#1E293B]"
    },
    {
      icon: (
        <div className="flex gap-2">
          <IconGitBranch className="h-6 w-6 md:h-8 md:w-8 text-[#F05033]" />
          <IconCloudUpload className="h-6 w-6 md:h-8 md:w-8 text-[#000000]" />
        </div>
      ),
      title: "Outils & Workflows",
      description: "Intégration continue",
      highlights: [
        "Git/GitHub", 
        "Vercel/Netlify",
        "CI/CD"
      ],
      color: "from-[#F05033] to-[#1E293B]"
    }
  ];

  // Configuration d'animation conditionnelle
  const animationProps = {
    initial: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.5 },
    viewport: { once: true }
  };

  const skillAnimationProps = (index: number) => ({
    ...animationProps,
    transition: { 
      duration: isMobile ? 0 : 0.5, 
      delay: isMobile ? 0 : index * 0.1 
    }
  });

  return (
    <section id="competences" className="py-16 md:py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto px-4">
        {/* Titre animé */}
        <div className="mb-12 md:mb-16 text-center">
          <TypewriterEffect 
            words={titleWords} 
            className="justify-center"
            cursorClassName={isMobile ? "hidden" : ""}
          />
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto text-sm md:text-base">
            Technologies que j&apos;utilise quotidiennement pour créer des expériences web exceptionnelles
          </p>
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              {...skillAnimationProps(index)}
            >
              <BackgroundGradient className="h-full rounded-xl md:rounded-2xl p-4 md:p-6 bg-neutral-800">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icone avec effet de gradient */}
                  <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-full bg-gradient-to-br ${skill.color}`}>
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-blue-400 text-sm md:text-base mb-3 md:mb-4">{skill.description}</p>
                  
                  <ul className="text-xs md:text-sm text-neutral-300 mt-auto space-y-1">
                    {skill.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-500">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Barre de progression optionnelle - désactivée sur mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 bg-white/5 rounded-xl p-4 md:p-6 border border-white/10"
          >
            <h4 className="text-center font-medium mb-3 md:mb-4 text-sm md:text-base">Mon stack frontend en 2025</h4>
            <div className="space-y-3 md:space-y-4">
              {[
                { name: "Next.js", level: "90%" },
                { name: "TypeScript", level: "70%" },
                { name: "Tailwind CSS", level: "90%" },
                { name: "Framer Motion", level: "70%" },
              ].map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span>{tech.name}</span>
                    <span className="text-neutral-400">{tech.level}</span>
                  </div>
                  <div className="h-1 md:h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r from-blue-500 to-blue-700`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}