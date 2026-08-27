import React from 'react';
import { Award, BookOpen, Code2, GraduationCap, Flame, Cpu, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="text-violet-500" size={24} />,
      value: "2 Major",
      label: "Full-Stack Apps"
    },
    {
      icon: <Code2 className="text-indigo-500" size={24} />,
      value: "15+",
      label: "Tech Skills"
    },
    {
      icon: <Cpu className="text-pink-500" size={24} />,
      value: "MERN + Sockets",
      label: "Specialist"
    }
  ];

  return (
    <section id="about" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Full-Stack Software Engineer passionate about real-time communication, microservices, Redux state management, and production-grade security architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Stats & Academic Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative glass p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="text-indigo-600 dark:text-indigo-400" />
              <span>Academic Foundation</span>
            </h3>
            
            <div className="space-y-4 text-left border-l-2 border-indigo-500/30 pl-4 ml-1">
              <div>
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Guru Ghasidas Vishwavidyalaya, Bilaspur, India
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Expected Graduation: 2027
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 text-center hover:scale-[1.03] transition-all shadow-sm hover:shadow-md"
                >
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-md mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Engineering Pitch */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Engineering Scalable & Secure Web Ecosystems
            </h3>
            
            <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed">
              I specialize in designing and engineering full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js), augmented by real-time WebSockets (Socket.io), Redux Toolkit state stores, JWT authentication, and Two-Factor Authentication (2FA) security guards.
            </p>
            
            <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed">
              Through building production-ready projects like <strong>Talk-Sphere</strong> (a real-time collaboration workspace with AI chatbot integration) and <strong>Glam Beauty</strong> (a multi-role e-commerce logistics platform with seller dashboards and driver dispatching), I've developed deep intuition for schema normalization, state management, and clean RESTful API routing.
            </p>
          </div>

          {/* Core Focus Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-100/80 dark:border-indigo-900/20">
              <div className="p-2 rounded-xl bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <Flame size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                  Real-Time & AI Systems
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Proficient in WebSocket bi-directional channels, AI agent integration, and debounced data persistence.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-100/80 dark:border-purple-900/20">
              <div className="p-2 rounded-xl bg-purple-100/80 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                  Multi-Role Security
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Experienced with JWT authentication, 2FA admin login verification, and RBAC authorization pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

