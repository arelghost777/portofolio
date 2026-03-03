"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useScopedI18n } from "../../../locales/client";

type FormData = { 
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const t = useScopedI18n("contact");
  const [isSending, setIsSending] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    mode: "onBlur"
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: data.name, email: data.email, message: data.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      alert(t('alerts.success'));
      reset();
    } catch (error) {
      alert(t('alerts.error'));
      console.error("Email sending error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const getErrorMessage = (field: keyof FormData) => {
    if (!errors[field]) return null;
    
    if (field === 'name') {
      if (errors.name?.type === 'minLength') return t('form.name.minLength');
      return t('form.name.error');
    }
    if (field === 'email') {
      if (errors.email?.type === 'pattern') return t('form.email.pattern');
      return t('form.email.error');
    }
    if (field === 'message') return t('form.message.error');
    
    return null;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-6">

        <motion.div {...animationProps} className="mb-20">
          <h2 className="text-sm font-medium tracking-[0.3em] text-neutral-400 uppercase mb-4">
            {t('title')}
          </h2>
          <p className="text-3xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
            {t('header.line1')} <br />
            <span className="italic text-neutral-400">{t('header.line2')}</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-6">{t('coordinates')}</h3>
              <div className="space-y-6">
                <a href="mailto:areltohoubi@gmail.com" className="group flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <div className="p-3 border border-neutral-100 dark:border-neutral-900 group-hover:border-black dark:group-hover:border-white transition-colors">
                    <FiMail size={18} />
                  </div>
                  <span className="text-sm tracking-wide">areltohoubi@gmail.com</span>
                </a>
                
                <div className="flex gap-4">
                  {[
                    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/arel-tohoubi-934a122b6", label: "LinkedIn" },
                    { icon: <FiGithub size={20} />, url: "https://github.com/arelghost777", label: "GitHub" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      aria-label={social.label}
                      className="p-4 border border-neutral-100 dark:border-neutral-900 text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-100 dark:border-neutral-900">
              <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-widest">
                {t('location.label')} <br />
                {t('location.availability')}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12" noValidate>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-1">
                  {t('form.name.label')}
                </label>
                <input
                  type="text"
                  {...register("name", { 
                    required: true, 
                    minLength: 2 
                  })}
                  className="w-full py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white outline-none transition-all placeholder:text-neutral-300 dark:placeholder:text-neutral-800"
                  placeholder={t('form.name.placeholder')}
                />
                {errors.name && (
                  <span className="absolute right-0 top-4 text-[10px] text-red-500 uppercase tracking-tighter">
                    {getErrorMessage('name')}
                  </span>
                )}
              </div>

              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-1">
                  {t('form.email.label')}
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: true, 
                    pattern: /^\S+@\S+$/i 
                  })}
                  className="w-full py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white outline-none transition-all placeholder:text-neutral-300 dark:placeholder:text-neutral-800"
                  placeholder={t('form.email.placeholder')}
                />
                {errors.email && (
                  <span className="absolute right-0 top-4 text-[10px] text-red-500 uppercase tracking-tighter">
                    {getErrorMessage('email')}
                  </span>
                )}
              </div>

              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-1">
                  {t('form.message.label')}
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: true })}
                  className="w-full py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white outline-none transition-all resize-none placeholder:text-neutral-300 dark:placeholder:text-neutral-800"
                  placeholder={t('form.message.placeholder')}
                />
                {errors.message && (
                  <span className="absolute right-0 top-4 text-[10px] text-red-500 uppercase tracking-tighter">
                    {getErrorMessage('message')}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group flex items-center gap-8 py-4 text-neutral-900 dark:text-neutral-100 hover:gap-12 transition-all duration-500 border-b border-black dark:border-white w-full md:w-auto"
              >
                <span className="text-xs uppercase tracking-[0.4em] font-bold">
                  {isSending ? t('form.submit.sending') : t('form.submit.send')}
                </span>
                <FiArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}