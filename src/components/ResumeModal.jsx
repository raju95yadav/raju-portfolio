import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Raju Kumar - Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Full-Stack Software Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/raju_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title="Open PDF in new tab"
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
            </a>
            <a
              href="/raju_resume.pdf"
              download="Raju_Kumar_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all"
              aria-label="Close Resume Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-950 relative overflow-hidden">
          <iframe
            src="/raju_resume.pdf#toolbar=1"
            title="Raju Kumar Resume PDF"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer for mobile view */}
        <div className="sm:hidden px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-between items-center text-xs">
          <a
            href="/raju_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1"
          >
            <ExternalLink size={12} />
            <span>Open in new tab</span>
          </a>
          <span className="text-slate-400">PDF Document</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
