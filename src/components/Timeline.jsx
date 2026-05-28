import React from 'react';
import { Calendar, Code, ShieldCheck, Zap, Globe } from 'lucide-react';

const Timeline = () => {
  const steps = [
    {
      year: "2026",
      title: "Building Scalable Systems",
      description: "Focusing on architectural designs, optimizing API endpoints, implementing database index profiles, and studying DSA structures.",
      icon: <Zap size={18} className="text-pink-500" />,
      bgIcon: "bg-pink-500/10"
    },
    {
      year: "2025",
      title: "Learned Deployment & Real-time Apps",
      description: "Mastered WebSockets (Socket.io), Cloudinary asset hosting, user validation methods, and deploying projects directly onto cloud platforms like Vercel and render engines.",
      icon: <Globe size={18} className="text-emerald-500" />,
      bgIcon: "bg-emerald-500/10"
    },
    {
      year: "2024",
      title: "Built MERN Projects",
      description: "Deepened frontend/backend skills by building full-stack web sites, e-commerce stores, role controls, database routing, and state stores.",
      icon: <Code size={18} className="text-indigo-500" />,
      bgIcon: "bg-indigo-500/10"
    },
    {
      year: "2023",
      title: "Started Coding",
      description: "Initiated my software journey by learning structural HTML/CSS layouts, Javascript fundamentals, DOM manipulation, and setting up core development settings.",
      icon: <Calendar size={18} className="text-violet-500" />,
      bgIcon: "bg-violet-500/10"
    }
  ];

  return (
    <section id="timeline" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Journey Timeline
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          My learning path and development milestones.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Connecting Vertical Bar */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-indigo-100 dark:bg-slate-800 -translate-x-[1px]"></div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`flex flex-col md:flex-row items-start relative ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Central Glowing Icon Dot */}
              <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center -translate-x-1/2 bg-indigo-50 dark:bg-indigo-900/40 z-10 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              </div>

              {/* Side Spacing Offset for Desktop Layout */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:scale-[1.02] transition-all">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono tracking-widest px-3 py-1 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded-lg">
                      {step.year}
                    </span>
                    <div className={`p-2 rounded-xl ${step.bgIcon}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Empty placeholder spacer column for desktop layout balance */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
