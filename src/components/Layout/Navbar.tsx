"use client";
import { useIsMobile } from "@/hook/useIsMobile";
import { IconMenu, IconX } from "@tabler/icons-react";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "../../../locales/client";
import Link from "next/dist/client/link";

export default function Navbar() {
    const isMobile = useIsMobile();
    const [isActive, setIsActive] = useState(false);

    const changeLocale = useChangeLocale()
    const locale = useCurrentLocale()

    const t = useScopedI18n("Navbar");

    const toggleMenu = () => setIsActive(!isActive);

    const navLinks = [
        { name: t('about'), href: "/#about" },
        { name: t('projects'), href: "/#projets" }, // Corrigé pour matcher l'ID de ta section
        { name: t('contact'), href: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo / Nom */}
                <Link href="/" className="text-sm font-bold tracking-[0.3em] uppercase">
                    Arel <span className="font-light italic">T.</span>
                </Link>

                {isMobile ? (
                    <button 
                        onClick={toggleMenu} 
                        className="z-50 text-neutral-900 dark:text-white"
                        aria-label="Menu"
                    >
                        {isActive ? <IconX size={20} /> : <IconMenu size={20} />}
                    </button>
                ) : (
                    <div className="flex items-center gap-12">
                        <div className="flex gap-10">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={link.href} 
                                    className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <button onClick={()=> changeLocale(locale === "fr" ? "en" : "fr")} className="text-[10px] font-bold border border-neutral-200 dark:border-neutral-800 px-3 py-1 hover:border-black dark:hover:border-white transition-all">
                            {locale === "fr" ? "EN" : "FR"}
                        </button>
                    </div>
                )}
            </div>

            {/* Menu Mobile Minimaliste (Overlay) */}
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col items-center justify-center space-y-8 z-40"
                    >
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href} 
                                onClick={toggleMenu}
                                className="text-2xl font-light uppercase tracking-[0.4em] text-neutral-900 dark:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={()=> changeLocale(locale === "fr" ? "en" : "fr")} className="text-[10px] font-bold border border-neutral-200 dark:border-neutral-800 px-3 py-1 hover:border-black dark:hover:border-white transition-all">
                            {locale === "fr" ? "EN" : "FR"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Ligne de séparation fine comme un cheveu */}
            <div className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-900" />
        </nav>
    );
}