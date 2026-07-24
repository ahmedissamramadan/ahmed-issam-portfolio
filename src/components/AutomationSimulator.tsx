import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { workflowDemoSteps } from '../data/portfolioData';
import { Workflow, Play, RefreshCw, MessageSquare, Cpu, Database, Send, CheckCircle, Sparkles } from 'lucide-react';

export const AutomationSimulator: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return MessageSquare;
      case 'Cpu': return Cpu;
      case 'Database': return Database;
      case 'Send': return Send;
      default: return Workflow;
    }
  };

  const startSimulation = () => {
    setIsRunning(true);
    setActiveStep(1);
    setCompleted(false);

    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      if (current <= workflowDemoSteps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setCompleted(true);
      }
    }, 1200);
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsRunning(false);
    setCompleted(false);
  };

  return (
    <section id="simulator" className="py-24 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Workflow className="w-4 h-4 text-emerald-400" />
            <span>{t('محاكي الأتمتة المباشر', 'Interactive Automation Simulator')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('تجربة حية لسلسلة أتمتة n8n وواتساب الأعمال', 'Live n8n & WhatsApp Business API Pipeline Demo')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('اضغط على زر التشغيل لرؤية كيفية تدفق البيانات بين رسائل الواتساب، محرك n8n، وقاعدة بيانات SQLite لحظياً.', 'Click run to simulate an end-to-end incoming webhook flow through AI classification, local SQLite logging, and Meta interactive response dispatch.')}
          </p>
        </div>

        {/* Simulator Box */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden shadow-2xl">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-slate-300 font-bold">
                {t('محرك n8n + الواتساب الرسمي (بيئة اختبار حية)', 'n8n Engine + Meta Official Webhook (Live Sandbox)')}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={startSimulation}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isRunning
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-105'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>{t('جاري تنفيذ الخطوات...', 'Executing Workflow...')}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t('تشغيل محاكاة سير العمل', 'Run Live Simulation')}</span>
                  </>
                )}
              </button>

              <button
                onClick={resetSimulation}
                disabled={isRunning}
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
                title={t('إعادة تعيين المحاكاة', 'Reset Simulation')}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Pipeline Steps Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowDemoSteps.map((step) => {
              const StepIcon = getStepIcon(step.icon);
              const isCurrent = activeStep === step.id;
              const isDone = activeStep > step.id || completed;

              return (
                <div
                  key={step.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative ${
                    isCurrent
                      ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-500/20 scale-105'
                      : isDone
                      ? 'bg-slate-900/90 border-emerald-500/40 text-slate-200'
                      : 'bg-slate-900/40 border-slate-800 opacity-60'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                      isCurrent
                        ? 'bg-emerald-500 text-slate-950'
                        : isDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.id}
                    </span>

                    <div className={`p-2 rounded-xl ${
                      isCurrent ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Detail */}
                  <h4 className="text-sm font-bold text-white mb-2">
                    {step.title[t('ar', 'en') as 'ar' | 'en']}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.detail[t('ar', 'en') as 'ar' | 'en']}
                  </p>

                  {/* Status Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px]">
                    {isCurrent && (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        {t('جاري المعالجة...', 'Processing...')}
                      </span>
                    )}
                    {isDone && (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {t('تم التنفيذ بنجاح', 'Executed')}
                      </span>
                    )}
                    {!isCurrent && !isDone && (
                      <span className="text-slate-500">{t('في انتظار الإشارة', 'Standby')}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Banner when completed */}
          {completed && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>
                  {t('اكتملت سلسلة الأتمتة بنجاح خلال 4.8 ثانية دون أي تدخل بشري!', 'Workflow completed successfully in 4.8 seconds zero-touch!')}
                </span>
              </div>
              <button
                onClick={startSimulation}
                className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                {t('إعادة التجربة', 'Re-run')}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
