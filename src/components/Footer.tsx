"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiClock } from "react-icons/fi";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const [localTime, setLocalTime] = useState("")
  useEffect(()=> {
    const times = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: 'numeric' });
    setLocalTime(times)
  }, [])

  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Arel <span className="text-blue-500">Tohoubi</span>
            </h3>
            <p className="mb-4">
              Développeur web passionné par la création d&apos;expériences digitales exceptionnelles.
            </p>
            <p>© {currentYear} — Tous droits réservés</p>
          </motion.div>

          {/* Colonne 2 : Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Conditions d&apos;utilisation
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-white transition-colors">
                  Plan du site
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3 : Contacts & Réseaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connectons-nous</h4>
            
            {/* Réseaux sociaux */}
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/tonprofil" 
                target="_blank"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/tonprofil" 
                target="_blank"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/tonprofil" 
                target="_blank"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>

            {/* Infos contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 text-blue-500" />
                <a href="tel:+2290153014176" className="hover:text-white transition-colors">
                  +229 01 53 01 41 76
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="h-4 w-4 text-blue-500" />
                <span>Heure locale : {localTime} (GMT+2)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ligne de copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-neutral-800 mt-12 pt-6 text-sm text-center"
        >
          <p>Conçu avec Next.js — Dernière mise à jour : {currentYear}</p>
        </motion.div>
      </div>
    </footer>
  );
}