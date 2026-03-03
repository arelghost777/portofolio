import { projects as rawProjects } from '@/data/data';
import { useScopedI18n } from '../../locales/client';

export const useTranslatedProjects = () => {
  const t = useScopedI18n("projects" as never) as (key: string, vars?: Record<string, any>) => string;
  
  return rawProjects.map(project => ({
    ...project,
    title: t(`items.${project.id}.title` as string),
    description: t(`items.${project.id}.description` as any),
    overview: t(`items.${project.id}.overview` as any)
  }));
};