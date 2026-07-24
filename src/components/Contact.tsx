import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalDetails } from '../data/portfolioData';
import { Mail, MessageSquare, Send, Github, Linkedin, CheckCircle2, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{t('تواصل مباشر وطلب استشارة', 'Direct Contact & Connect')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('لنبدأ وبناء منتجك الرقمي القادم', 'Let’s Build Your Next Digital Product Together')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('هل لديك فكرة مشرووع، أو ترغب في أتمتة سير أعمال شركتك بـ n8n والواتساب الرسمي؟ يسعدني التواصل المباشر معك.', 'Have a product concept or want to integrate automated WhatsApp AI pipelines? Feel free to reach out directly.')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Direct Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Box */}
            <div className="glass-panel p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {t('التواصل السريع عبر الواتساب', 'Direct WhatsApp Chat')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t('رد مباشر وسريع لمناقشة المشاريع والأتمتة', 'Fastest channel for project inquiry & collaboration')}
                  </p>
                </div>
              </div>

              <a
                href={personalDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>{t('بدء محادثة واتساب الآن', 'Start WhatsApp Conversation')}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {t('روابط المواقع والملفات الشخصية', 'Profiles & Repositories')}
              </h3>

              <div className="space-y-3">
                <a
                  href={personalDetails.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <span className="text-[11px] text-slate-500">github.com</span>
                </a>

                <a
                  href={personalDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <span className="text-[11px] text-slate-500">linkedin.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('تم إرسال رسالتك بنجاح!', 'Message Sent Successfully!')}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {t('شكراً لتواصلك. سأقوم بالرد عليك في أقرب وقت ممكن.', 'Thank you for reaching out. I will respond to your message promptly.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white">
                  {t('إرسال رسالة مباشرة', 'Send a Direct Message')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      {t('الاسم الكريم', 'Your Name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('أحمد علي', 'John Doe')}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      {t('البريد الإلكتروني', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    {t('تفاصيل الرسالة أو المشروع', 'Message or Project Details')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('اكتب تفاصيل طلبك أو استفسارك هنا...', 'Write your message or project requirements here...')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('إرسال الرسالة الآن', 'Submit Message')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
