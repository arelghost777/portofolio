import { projects as rawProjects } from "@/data/data";
import Link from "next/dist/client/link";
import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiArrowLeft } from "react-icons/fi";
import { notFound } from "next/navigation";
import { getI18n } from "../../../../../locales/server";

type Params = Promise<{ id: string; locale: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { id, locale } = await params;
  const projectId = Number(id);
  
  // Récupérer le projet brut
  const rawProject = rawProjects.find(p => p.id === projectId);
  if (!rawProject) {
    notFound(); // ou redirection
  }

  // Initialiser la fonction de traduction pour la locale courante
  const t = await getI18n();

  // Traduire les champs du projet
  const project = {
    ...rawProject,
    title: t(`projects.items.${rawProject.id}.title` as any),
    description: t(`projects.items.${rawProject.id}.description` as any),
    overview: t(`projects.items.${rawProject.id}.overview` as any),
  };

  // Extraire la première phrase pour la citation
  const firstSentence = project.overview.split('.')[0] + '.';
  const restOfOverview = project.overview.split('.').slice(1).join('.');

  return (
    <div className="bg-white dark:bg-black min-h-screen pb-24 transition-colors duration-500">
      {/* Back Button Subtil */}
      <div className="container mx-auto px-6 pt-32">
        <Link 
          href="/#projets" 
          className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {t('project.backToProjects')}
        </Link>
      </div>

      {/* Hero Section du Projet */}
      <section className="container mx-auto px-6 pt-12 pb-24 text-left">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-light text-neutral-900 dark:text-neutral-100 tracking-tighter leading-tight mb-8">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Grande Image Overview */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <Image 
              src={project.overview_image} 
              alt={project.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contenu de l'étude de cas */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Info (Tools & Links) */}
          <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                {t('project.techStack')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs border border-neutral-100 dark:border-neutral-900 px-3 py-1 text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-neutral-100 dark:border-neutral-900">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                {t('project.directLinks')}
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  href={project.preview}
                  target="_blank"
                  className="group flex items-center justify-between py-2 border-b border-neutral-100 dark:border-neutral-900 hover:border-black dark:hover:border-white transition-colors"
                >
                  <span className="text-sm tracking-widest uppercase font-medium">{t('project.liveDemo')}</span>
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="group flex items-center justify-between py-2 border-b border-neutral-100 dark:border-neutral-900 hover:border-black dark:hover:border-white transition-colors"
                >
                  <span className="text-sm tracking-widest uppercase font-medium">{t('project.sourceCode')}</span>
                  <FiGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* Corps de texte (Project Overview) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-8">
                {t('project.projectDescription')}
              </h2>
              <div className="prose prose-neutral dark:prose-invert prose-lg">
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed italic border-l-2 border-neutral-100 dark:border-neutral-900 pl-6 mb-8 text-xl">
                  {firstSentence}
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 font-light leading-relaxed">
                  {restOfOverview}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
