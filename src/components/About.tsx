import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalDetails } from '../data/portfolioData';
import { UserCheck, Sparkles, BookOpen, Rocket, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      year: '2022',
      title: { ar: 'ليسانس الحقوق - جامعة الزقازيق (الانعطاف نحو البرمجة)', en: 'LL.B. Graduate & Complete Tech Pivot' },
      desc: {
        ar: 'التخرج الأكاديمي، والانتقال الفوري والشامل للتعلّم الذاتي وبناء البرمجيات والمنتجات الرقمية دون الانضمام لنقابة المحامين أو ممارسة المهنة.',
        en: 'Graduated LL.B., immediately channeling all focus into full-time self-taught coding, web building, and product design.'
      },
      icon: BookOpen
    },
    {
      year: '2023',
      title: { ar: 'تطوير مهارات الواجهات الأمامية والـ UI/UX', en: 'Mastering Frontend & UI/UX Design' },
      desc: {
        ar: 'الاحتراف العملي في Figma وStitch وReact وTypeScript وTailwind CSS لبناء منصات وتطبيقات سريعة وجذابة.',
        en: 'Hands-on mastery of Figma design systems, React, Next.js, TypeScript, and modern responsive CSS.'
      },
      icon: Rocket
    },
    {
      year: '2024',
      title: { ar: 'اعتمادات ALX الرسمية وأتمتة الواتساب', en: 'ALX Official Certifications & Automation Architecture' },
      desc: {
        ar: 'الحصول على شهادتي ALX AI Career Essentials و ALX Project Management، وتصميم شبكات أتمتة معقدة بـ n8n والواتساب الرسمي.',
        en: 'Earned official ALX AI Essentials & Project Management certificates; architected n8n & WhatsApp Business API flows.'
      },
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>{t('قصتي والشغف التقني', 'My Story & Philosophy')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('المسار التعلمي العصامي والقيمة المضافة', 'Self-Taught Engineering & Product Vision')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('رؤية برمجية قائمة على حل المشكلات الحقيقية وبناء أنظمة وتدفقات عمل تضاعف الكفاءة.', 'Building production-grade software by mastering self-directed execution and automated architecture.')}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>{t('من الدراسة الأكاديمية إلى شغف ابتكار البرمجيات', 'From Academic Discipline to Tech Mastery')}</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
              {personalDetails.aboutBio[t('ar', 'en') as 'ar' | 'en']}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t('تعلم ذاتي وتطبيق عملي', '100% Self-Taught')}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t('بناء مشاريع حقيقية وتصميم أنظمة كاملة بنفسي', 'Learning by building real products and pipelines')}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t('عقلية رواد الأعمال', 'Founder Mindset')}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t('التركيز على تجربة المستخدم ونمو الأعمال', 'Focusing on user value and scalable growth')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-2">
              {t('محطات رئيسية في مساري', 'Key Milestones')}
            </h4>

            {timelineItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {item.year}
                      </span>
                      <h5 className="text-sm font-bold text-white">
                        {item.title[t('ar', 'en') as 'ar' | 'en']}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc[t('ar', 'en') as 'ar' | 'en']}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
