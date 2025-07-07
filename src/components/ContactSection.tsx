"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: "onBlur"
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);
      // Ici vous pourriez ajouter un appel API réel
      alert(`Merci pour votre message, ${data.name} !`);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-2">
            Entrons en <span className="text-blue-500">contact</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discutons de votre projet ou simplement échangeons autour du développement web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700"
            noValidate
          >
            <div className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
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
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { 
                    required: "Ce champ est requis",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 caractères"
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Dites-moi en quoi puis-je vous aider..."
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg disabled:opacity-50"
                disabled={Object.keys(errors).length > 0}
              >
                Envoyer le message <FiSend className="h-4 w-4" />
              </button>
            </div>
          </motion.form>

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-6">Contactez-moi directement</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:areltohoubi@gmail.com"
                  title="Envoyer un mail"
                  className="flex items-center gap-4 p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Envoyer un email"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiMail className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                    <p className="font-medium">areltohoubi@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/areltohoubi"
                  title="Voir mon profil linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Profil LinkedIn"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiLinkedin className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/areltohoubi</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/arelghost777"
                  title="Voir mon profil GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  aria-label="Profil GitHub"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <FiGithub className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">GitHub</p>
                    <p className="font-medium">github.com/arelghost777</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA secondaire */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-2">Disponible pour de nouvelles opportunités</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                Je suis actuellement ouvert aux propositions de freelance et aux projets innovants.
              </p>
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
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