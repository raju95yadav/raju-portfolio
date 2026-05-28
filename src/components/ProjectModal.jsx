import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 z-10 animate-slide-up max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 sticky top-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Case Study
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Mockup Preview */}
          <div className="w-full h-48 sm:h-72 rounded-2xl overflow-hidden shadow-inner border border-slate-200/40 dark:border-slate-800/40 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/60 backdrop-blur-md rounded-lg border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Block: Problem & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-amber-500" size={18} />
                  <span>The Problem</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={18} />
                  <span>The Solution</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Right Block: Features Check */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Core Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Technical Details: Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="text-indigo-600 dark:text-indigo-400" size={18} />
                <span>Technical Challenges</span>
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.caseStudy.challenges}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="text-amber-500" size={18} />
                <span>Key Learnings</span>
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.caseStudy.learnings}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span>GitHub Repository</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/15 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
