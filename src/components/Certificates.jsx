import React from 'react';
import { Award, ShieldAlert, CheckCircle, Hourglass } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: "Data Structures & Algorithms (DSA)",
      provider: "LeetCode & GeeksforGeeks",
      status: "In Progress",
      icon: <Hourglass className="text-amber-500 animate-pulse" size={20} />,
      statusBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      description: "Mastering array manipulation, tree traversals, dynamic programming, and complexity optimizations."
    },
    {
      title: "Full Stack Web Development",
      provider: "MERN Stack Professional",
      status: "Completed",
      icon: <CheckCircle className="text-emerald-500" size={20} />,
      statusBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      description: "Validated hands-on experience building multi-tier architectures with databases, secure backends, and responsive UIs."
    },
    {
  title: "Industry-Level Full Stack Development",
  provider: "MERN Stack & Deployment",
  status: "In Progress",
  icon: <Award className="text-indigo-500" size={20} />,
  statusBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  description: "Focused on building production-ready full stack applications with authentication, deployment, scalability, responsive UI, and real-time communication systems."
},
    {
      title: "AI & ML Integration",
      provider: "Cognitive Class / DeepLearning.AI",
      status: "Planned",
      icon: <Hourglass className="text-indigo-500 animate-pulse" size={20} />,
      statusBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      description: "Learning vector embeddings, semantic search integrations, AI prompt engineering, and chatbot memory architectures."
    }
  ];

  return (
    <section id="certificates" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Certifications & Goals
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          development completed and key technical domains I am actively mastering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, idx) => (
          <div 
            key={idx}
            className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:scale-[1.01]"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {cert.provider}
                  </p>
                </div>
                
                {/* Status Capsule */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cert.statusBg} flex-shrink-0`}>
                  {cert.icon}
                  <span>{cert.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed text-left">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
