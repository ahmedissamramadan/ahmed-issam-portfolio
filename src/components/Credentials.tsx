import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { credentialsData } from '../data/portfolioData';
import { Award, Brain, Target, GraduationCap, Rocket, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Credentials: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Target': return Target;
      case 'GraduationCap': return GraduationCap;
      case 'Rocket': return Rocket;
      case 'Cpu': return Cpu;
      default: return Award;
    }
  };

  return (
    <section id="credentials" className="py-24 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>{t('المؤهلات والشهادات المعتمدة', 'Verified Credentials & Studies')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('شهادات معتمدة ومسار تعلم تطبيقي', 'Official Certifications & Knowledge Tracks')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('سجل توثيقي شفاف ودقيق للشهادات المعتمدة والدراسات التطبيقية ذات الصلة بالتقنية والذكاء الاصطناعي.', 'Transparent documentation of verified credentials, official ALX certifications, and applied coursework.')}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentialsData.map((item) => {
            const IconComp = getIcon(item.icon);
            const isOfficialCert = item.type === 'certification';
            
            return (
              <div
                key={item.id}
                className={`glass-card glass-card-hover rounded-2xl p-6 border flex flex-col justify-between relative overflow-hidden ${
                  isOfficialCert ? 'border-cyan-500/40 bg-cyan-950/20' : 'border-slate-800'
                }`}
              >
                {/* Highlight banner for official certs */}
                {isOfficialCert && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500" />
                )}

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isOfficialCert ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                      isOfficialCert
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {item.badgeText[t('ar', 'en') as 'ar' | 'en']}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title[t('ar', 'en') as 'ar' | 'en']}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 text-xs font-medium text-cyan-400">
                    <span>{item.issuer[t('ar', 'en') as 'ar' | 'en']}</span>
                    <span>•</span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>

                  <p className="mt-3 text-slate-300 text-xs leading-relaxed font-light">
                    {item.description[t('ar', 'en') as 'ar' | 'en']}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  {isOfficialCert ? (
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t('شهادة معتمدة موثقة', 'Verified Official Certificate')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                      <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                      {t('تطبيق وحصيلة معرفية', 'Applied Knowledge Track')}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
