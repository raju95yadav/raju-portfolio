import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers, Cpu, ShieldCheck, Code, Zap } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview & Impact', icon: <Layers size={16} /> },
    { id: 'features', label: 'Key Features', icon: <CheckCircle2 size={16} /> },
    { id: 'architecture', label: 'System Architecture', icon: <Cpu size={16} /> },
    { id: 'techstack', label: 'Tech Stack Matrix', icon: <Code size={16} /> }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800/80 z-10 animate-slide-up max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-20 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                Case Study
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                • {project.category}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>

            {/* Quick Action Pills */}
            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Repo</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center space-x-1 border-t border-slate-200/60 dark:border-slate-800/80 pt-2 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === t.id
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/80 dark:border-slate-700/60'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: OVERVIEW & IMPACT */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Media Preview Banner */}
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-800/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.badges.map((b, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-semibold text-indigo-200 bg-slate-900/80 backdrop-blur-md rounded-lg border border-indigo-500/30">
                      ⚡ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Highlights Bar */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{m.label}</span>
                      <span className="text-base sm:text-lg font-extrabold text-indigo-600 dark:text-indigo-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 space-y-2">
                  <h4 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400" />
                    <span>The Core Problem</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 space-y-2">
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                    <span>The Solution Delivered</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEY FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30">
                <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-1">
                  Feature Breakdown & Specifications
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Comprehensive feature set built and verified in the live codebase.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-3 hover:border-indigo-400/50 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5">
                      <Zap size={16} />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">Feature #{idx + 1}</span>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SYSTEM ARCHITECTURE & CHALLENGES */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              {/* Architecture overview card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="text-indigo-600 dark:text-indigo-400" size={18} />
                  <span>Technical System Architecture</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>

              {/* Challenges & Learnings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <AlertTriangle className="text-violet-500" size={18} />
                    <span>Technical Challenges Overcome</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.caseStudy.challenges}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Lightbulb className="text-amber-500" size={18} />
                    <span>Engineering Learnings</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.caseStudy.learnings}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TECH STACK MATRIX */}
          {activeTab === 'techstack' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Technology Stack Responsibilities
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Exact roles of technologies used in building {project.title}.
                </p>
              </div>

              {project.techDetails ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.techDetails.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                          {tech.name}
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {tech.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
            Project: <strong className="text-slate-800 dark:text-slate-200">{project.title}</strong>
          </span>
          <div className="flex justify-end gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close Window
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink size={16} />
              <span>Visit Live App</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;

