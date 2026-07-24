import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Sparkles, Code2, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('من أنا', 'About Me') },
    { href: '#credentials', label: t('الاعتماد والشهادات', 'Credentials') },
    { href: '#skills', label: t('حزمة التقنيات', 'Tech Stack') },
    { href: '#projects', label: t('المشاريع', 'Projects') },
    { href: '#simulator', label: t('محاكي الأتمتة', 'Live Demo') },
    { href: '#contact', label: t('تواصل معي', 'Contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3 shadow-lg shadow-cyan-950/20 border-b border-slate-800/80' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                {t('أحمد عصام رمضان', 'Ahmed Issam')}
              </span>
              <span className="text-xs text-cyan-400/80 font-medium">
                {t('مبتكر منتجات ومُصمِم أتمتة', 'Product Builder & Automation Architect')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card text-xs font-semibold text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:opacity-95 hover:shadow-cyan-500/40 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('تواصل مباشر', 'Get in Touch')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-card text-xs text-cyan-300 border border-cyan-500/30"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('تواصل مباشر', 'Get in Touch')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
