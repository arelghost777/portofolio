"use client";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hook/useIsMobile";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useScopedI18n } from "../../../locales/client";

export default function PersonalAbout() {
  const isMobile = useIsMobile();
  const t = useScopedI18n("About");
  
  const mySkills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", 
    "TypeScript", "Tailwind CSS", "Git", "Github", "Responsive Design"
  ];

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div {...animationProps} className="mb-20">
          <h2 className="text-sm font-medium tracking-[0.3em] text-neutral-400 uppercase mb-4">
            {t('sectionLabel')}
          </h2>
          <div className="h-[1px] w-12 bg-black dark:bg-white mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            {...animationProps}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
              {t('titleBefore')} <span className="italic">{t('titleHighlight1')}</span> {t('titleMiddle')} <span className="italic">{t('titleHighlight2')}</span>.
            </h3>
            
            <div className="space-y-6 text-neutral-500 dark:text-neutral-400 max-w-xl text-lg leading-relaxed font-light">
              <p>
                {t('paragraph1')}
              </p>
              <p>
                {t('paragraph2')}
              </p>
            </div>

            <Link 
              href="#contact" 
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black dark:text-white pt-4"
            >
              {t('contactCta')}
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Skills (Droite) */}
          <motion.div 
            {...animationProps}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-8">
              {t('skillsTitle')}
            </h3>
            
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {mySkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="relative group cursor-default"
                >
                  <span className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}