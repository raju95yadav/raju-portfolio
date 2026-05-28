import React from 'react';
import { Award, BookOpen, Code2, GraduationCap, Flame, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="text-violet-500" size={24} />,
      value: "2+ Major",
      label: "Projects Built"
    },
    {
      icon: <Code2 className="text-indigo-500" size={24} />,
      value: "10+",
      label: "Technologies"
    },
    {
      icon: <Cpu className="text-pink-500" size={24} />,
      value: "Full Stack",
      label: "Developer"
    }
  ];

  return (
    <section id="about" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Get to know my professional background, passions, and core focus area.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Stats & Experience Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative glass p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="text-indigo-600 dark:text-indigo-400" />
              <span>Academic Foundation</span>
            </h3>
            
            <div className="space-y-4 text-left border-l-2 border-indigo-500/20 pl-4 ml-1">
              <div>
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">
                  Guru Ghasidas Vishwavidyalaya, Bilaspur, India
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Graduation: 2027
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

        {/* Right Column: Bio & Core Pitch */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Passion for Building Real-world Solutions
            </h3>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Full Stack Developer focused on building practical applications using the MERN stack (MongoDB, Express.js, React, Node.js), authentication systems, AI integration, and real-time communication features.
            </p>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              My coding philosophy revolves around learning by building. I believe that developing real-world projects, dealing with production deployments, and overcoming operational bottlenecks is the absolute best way to learn software engineering.
            </p>
          </div>

          {/* Traits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-100/80 dark:border-indigo-900/20">
              <div className="p-2 rounded-xl bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <Flame size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                  Passion
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Strong interest in building real-time collaboration platforms and robust user systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-100/80 dark:border-purple-900/20">
              <div className="p-2 rounded-xl bg-purple-100/80 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                  Learning Mindset
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Eager to learn backend optimization, microservices architecture, and advanced DSA.
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
