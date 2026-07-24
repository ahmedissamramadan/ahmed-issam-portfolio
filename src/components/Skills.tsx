import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategoriesData } from '../data/portfolioData';
import { Layers, Palette, Layout, Zap, Star, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(skillCategoriesData[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return Palette;
      case 'Layout': return Layout;
      case 'Zap': return Zap;
      default: return Layers;
    }
  };

  const selectedCategory = skillCategoriesData.find((c) => c.id === activeCategory) || skillCategoriesData[0];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>{t('حزمة الأدوات والتقنيات', 'Core Tech Stack & Tools')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('خبرات عملية متكاملة في التصميم والتطوير والأتمتة', 'Practical Mastery in Design, Development & Workflows')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('مجموعة الأدوات التي أعتمد عليها لبناء المنتجات الرقمية الحديثة وسلاسل الأتمتة الذكية.', 'The essential toolset I use to craft seamless digital experiences, modern frontends, and robust backend automations.')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {skillCategoriesData.map((cat) => {
            const IconComp = getCategoryIcon(cat.iconName);
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30 scale-105'
                    : 'glass-card border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{cat.title[t('ar', 'en') as 'ar' | 'en']}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-2xl p-6 border transition-all ${
                skill.highlight ? 'border-cyan-500/30 bg-cyan-950/10' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  {skill.highlight && <Star className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />}
                  <span>{skill.name}</span>
                </h3>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed mt-2">
                {skill.desc[t('ar', 'en') as 'ar' | 'en']}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('خبرة بناء وتطبيق عملي', 'Applied Hands-On Proficiency')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stack Pills */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-slate-800 text-center">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            {t('نظرة شمولية على الحزمة الكاملة', 'Full Technical Ecosystem')}
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'Figma', 'Stitch (Google)', 'Anima', 'HTML5', 'CSS3', 'Tailwind CSS',
              'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js',
              'Node.js', 'Python', 'SQLite (Local)', 'n8n Workflows',
              'Make.com', 'WhatsApp Business API'
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium hover:border-cyan-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
