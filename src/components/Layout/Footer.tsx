"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { useScopedI18n } from "../../../locales/client";

export default function SiteFooter() {
  const t = useScopedI18n('footer');
  const currentYear = new Date().getFullYear();
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString('fr-BJ', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Signature & Bio */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-white">
              {t('signature')}
            </h3>
            <p className="max-w-sm text-sm leading-relaxed font-light text-neutral-500">
              {t('bio')}
            </p>
          </div>

          {/* Localisation & Heure */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
              {t('location.title')}
            </h4>
            <div className="text-sm space-y-1">
              <p className="text-neutral-300">{t('location.country')}</p>
              <p className="text-neutral-400 font-light italic">
                {localTime} {t('location.time')}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
              {t('social.title')}
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/arel-tohoubi-934a122b6", icon: <FiLinkedin /> },
                { name: "GitHub", url: "https://github.com/arelghost777", icon: <FiGithub /> },
                { name: "Email", url: "mailto:areltohoubi@gmail.com", icon: <FiMail /> },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            {t('bottom.copyright', { year: currentYear })}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-white"
          >
            {t('bottom.backToTop')}
            <div className="p-2 border border-neutral-800 group-hover:border-white transition-all">
              <FiArrowUp />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}