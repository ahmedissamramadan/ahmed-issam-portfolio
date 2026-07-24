export type Language = 'ar' | 'en';

export interface Project {
  id: string;
  title: { ar: string; en: string };
  category: 'ai_os' | 'automation' | 'web_apps' | 'design';
  shortDesc: { ar: string; en: string };
  fullDesc: { ar: string; en: string };
  tags: string[];
  metrics?: { ar: string; en: string };
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: { ar: string; en: string };
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced" / "متقدم"
    desc: { ar: string; en: string };
    highlight?: boolean;
  }[];
}

export interface Credential {
  id: string;
  title: { ar: string; en: string };
  issuer: { ar: string; en: string };
  type: 'degree' | 'certification' | 'coursework';
  status: 'completed' | 'ongoing';
  date: string;
  description: { ar: string; en: string };
  badgeText: { ar: string; en: string };
  icon: string;
}

export interface WorkflowStep {
  id: number;
  title: { ar: string; en: string };
  icon: string;
  status: 'idle' | 'processing' | 'success';
  detail: { ar: string; en: string };
}
