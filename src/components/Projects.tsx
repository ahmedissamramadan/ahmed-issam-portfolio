import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { FolderGit2, ExternalLink, Sparkles, X, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: { ar: 'جميع المشاريع', en: 'All Projects' } },
    { id: 'ai_os', label: { ar: 'أنظمة الذكاء الاصطناعي', en: 'AI Systems' } },
    { id: 'automation', label: { ar: 'تدفقات الأتمتة', en: 'Automations' } },
    { id: 'web_apps', label: { ar: 'تطبيقات الويب', en: 'Web Applications' } },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>{t('معرض المشاريع والحلول البرمجية', 'Featured Projects & Systems')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('مشاريع عملية تعكس قدرات الابتكار والأتمتة', 'Real-World Products, Apps & Automation Engines')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('نماذج من الأنظمة والواجهات وتدفقات الأتمتة المتقدمة التي تم بناؤها واختبارها بكفاءة عالية.', 'A showcase of high-performance web platforms, AI workspaces, and WhatsApp automation pipelines.')}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'glass-card border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.label[t('ar', 'en') as 'ar' | 'en']}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title[t('ar', 'en') as 'ar' | 'en']}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />

                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-bold shadow-lg">
                      ⭐ {t('مشروع بارز', 'Featured Project')}
                    </span>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title[t('ar', 'en') as 'ar' | 'en']}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {project.shortDesc[t('ar', 'en') as 'ar' | 'en']}
                  </p>

                  {/* Metrics Badge if present */}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{project.metrics[t('ar', 'en') as 'ar' | 'en']}</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{t('تفاصيل ومكونات النظام', 'System Architecture Details')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>{activeModalProject.title[t('ar', 'en') as 'ar' | 'en']}</span>
              </h3>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <img
                src={activeModalProject.image}
                alt="Modal header"
                className="w-full h-48 object-cover rounded-2xl border border-slate-800"
              />

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t('شرح المشروع والتطبيق العملي', 'Detailed Implementation Breakdown')}
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                  {activeModalProject.fullDesc[t('ar', 'en') as 'ar' | 'en']}
                </p>
              </div>

              {activeModalProject.metrics && (
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{activeModalProject.metrics[t('ar', 'en') as 'ar' | 'en']}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {t('التقنيات المستخدمة في البناء', 'Technologies & Stack')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {t('إغلاق النافذة', 'Close Modal')}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
