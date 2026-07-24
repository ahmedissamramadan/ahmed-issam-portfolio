import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalDetails } from '../data/portfolioData';
import { Sparkles, ArrowLeft, ArrowRight, Zap, Code, Workflow, Layers, CheckCircle2, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-mesh">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold text-cyan-300">
                {t('مُطوّر عصامي | خبير أتمتة وذكاء اصطناعي', 'Self-Taught Product Builder & Automation Architect')}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {t('أبني المنتجات الرقمية،', 'Building High-Impact')}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                {t('وأصمم أتمتة سير العمل بالذكاء الاصطناعي', 'Digital Products & AI Automations')}
              </span>
            </h1>

            {/* Subtitle Tagline */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {personalDetails.tagline[t('ar', 'en') as 'ar' | 'en']}
            </p>

            {/* Key Stack Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {['React / Next.js', 'TypeScript & Tailwind', 'Figma & Stitch UI', 'n8n & Make Workflows', 'WhatsApp Business API', 'SQLite & Python'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
                  ⚡ {tech}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>{t('استعرض المشاريع', 'Explore Projects')}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-card border border-cyan-500/30 text-cyan-300 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>{t('تجربة محاكي الأتمتة المباشر', 'Test Live Automation Demo')}</span>
              </a>

              <a
                href={personalDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t('واتساب', 'WhatsApp')}</span>
              </a>
            </div>

            {/* Verified Cert Badges Row */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t('اعتماد ALX AI Career Essentials الرسمية', 'Verified ALX AI Career Essentials')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t('شهادة ALX إدارة المشاريع PM', 'Verified ALX Project Management')}</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card Component */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

              {/* Main Card Content */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl">
                
                {/* Header profile card info */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-xl">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">
                        AR
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {personalDetails.name[t('ar', 'en') as 'ar' | 'en']}
                    </h2>
                    <p className="text-xs text-cyan-400 font-medium">
                      {t('مُبتكر منتجات ومطوّر عصامي', 'Self-Taught Digital Builder')}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t('ليسانس حقوق 2022 (تفرّغ تام للتقنية والبرمجة)', 'LL.B. Zagazig 2022 (100% Tech Focus)')}
                    </p>
                  </div>
                </div>

                {/* Quick Capability Matrix */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t('محاور الخبرة والتنفيذ', 'Execution Focus')}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-card p-3 rounded-xl border border-slate-800">
                      <Layers className="w-5 h-5 text-cyan-400 mb-1" />
                      <div className="text-xs font-bold text-white">{t('تصميم UI/UX', 'UI/UX Design')}</div>
                      <div className="text-[10px] text-slate-400">Figma, Stitch, Anima</div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-slate-800">
                      <Code className="w-5 h-5 text-indigo-400 mb-1" />
                      <div className="text-xs font-bold text-white">{t('تطوير الواجهات', 'Frontend Stack')}</div>
                      <div className="text-[10px] text-slate-400">React, Next.js, TS</div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-slate-800">
                      <Workflow className="w-5 h-5 text-emerald-400 mb-1" />
                      <div className="text-xs font-bold text-white">{t('تدفقات الأتمتة', 'Automations')}</div>
                      <div className="text-[10px] text-slate-400">n8n, Make.com, Python</div>
                    </div>

                    <div className="glass-card p-3 rounded-xl border border-slate-800">
                      <Zap className="w-5 h-5 text-teal-400 mb-1" />
                      <div className="text-xs font-bold text-white">{t('واتساب الذكي', 'WhatsApp API')}</div>
                      <div className="text-[10px] text-slate-400">Official Meta Webhooks</div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Stats Row */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                  {personalDetails.stats.map((stat, i) => (
                    <div key={i} className="text-center p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-lg font-black text-cyan-400">{stat.value}</div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {stat.label[t('ar', 'en') as 'ar' | 'en']}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
