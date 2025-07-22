"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hook/useIsMobile";

type FormData = { 
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const isMobile = useIsMobile();
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: "onBlur"
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSending(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert(`Message envoyé avec succès, ${data.name} !`);
      reset();
    } catch (error) {
      console.error('Erreur:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSending(false);
    }
  };

  // Animation config conditionnelle
  const animationProps = {
    initial: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: isMobile ? 0 : 0.5 }
  };

  const formAnimationProps = {
    initial: { opacity: isMobile ? 1 : 0, x: isMobile ? 0 : -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0 : 0.5 },
    viewport: { once: true }
  };

  const contactAnimationProps = {
    initial: { opacity: isMobile ? 1 : 0, x: isMobile ? 0 : 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0 : 0.5 },
    viewport: { once: true }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.div {...animationProps} className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Entrons en <span className="text-blue-500">contact</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Discutons de votre projet ou simplement échangeons autour du développement web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <motion.form
            {...formAnimationProps}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700"
            noValidate
          >
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { 
                    required: "Ce champ est requis",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 caractères"
                    }
                  })}
                  className="w-full px-4 py-2 md:py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { 
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email invalide"
                    }
                  })}
                  className="w-full px-4 py-2 md:py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { 
                    required: "Ce champ est requis",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 caractères"
                    }
                  })}
                  className="w-full px-4 py-2 md:py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Dites-moi en quoi puis-je vous aider..."
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg disabled:opacity-50 text-sm md:text-base"
                disabled={Object.keys(errors).length > 0 || isSending}
              >
                {isSending ? "Envoi..." : "Envoyer le message"} <FiSend className="h-4 w-4" />
              </button>
            </div>
          </motion.form>

          {/* Coordonnées */}
          <motion.div
            {...contactAnimationProps}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contactez-moi directement</h3>
              
              <div className="space-y-3 md:space-y-4">
                {/* Email */}
                <a
                  href="mailto:areltohoubi@gmail.com"
                  title="Envoyer un mail"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Envoyer un email"
                >
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiMail className="h-4 w-4 md:h-5 md:w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                    <p className="text-sm md:text-base font-medium">areltohoubi@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arel-tohoubi-934a122b6"
                  title="Voir mon profil linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Profil LinkedIn"
                >
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiLinkedin className="h-4 w-4 md:h-5 md:w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">LinkedIn</p>
                    <p className="text-sm md:text-base font-medium">Linkedin.com/in/arel-tohoubi-934a122b6</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/arelghost777"
                  title="Voir mon profil GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Profil GitHub"
                >
                  <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiGithub className="h-4 w-4 md:h-5 md:w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">GitHub</p>
                    <p className="text-sm md:text-base font-medium">github.com/arelghost777</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA secondaire */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-2 text-sm md:text-base">Disponible pour de nouvelles opportunités</h4>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 mb-3 md:mb-4">
                Je suis actuellement ouvert aux propositions de freelance et aux projets innovants.
              </p>
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
              >
                Discutons-en !
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}