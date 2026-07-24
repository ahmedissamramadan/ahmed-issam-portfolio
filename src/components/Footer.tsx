import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalDetails } from '../data/portfolioData';
import { ArrowUp, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05080e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 text-center md:text-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Zap className="w-4 h-4 fill-white/20" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {personalDetails.name[t('ar', 'en') as 'ar' | 'en']}
              </div>
              <div className="text-xs text-slate-500">
                © {new Date().getFullYear()} {t('جميع الحقوق محفوظة. تم تطوير الموقع بعناية عالية.', 'All rights reserved. Self-Taught Product Builder.')}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">{t('عني', 'About')}</a>
            <a href="#credentials" className="hover:text-cyan-400 transition-colors">{t('الشهادات', 'Credentials')}</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">{t('المهارات', 'Skills')}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{t('المشاريع', 'Projects')}</a>
            <a href="#simulator" className="hover:text-cyan-400 transition-colors">{t('المحاكي', 'Simulator')}</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-card border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all cursor-pointer"
            title={t('العودة للأعلى', 'Back to top')}
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
