import React from 'react';
import { GraduationCap, Calendar, MapPin, BookMarked } from 'lucide-react';

const Education = () => {
  const courses = [
    "Computer Programming",
    "Computer Networks",
    "Computer Org & Architecture",
    "Operating Systems",
    "Digital Logic & Design",
    "IoT",
    "System Software",
    "Software Engineering",
    "Discrete Mathematics",
    "RDBMS",
    "Parallel Computing",
    "Theory of Computation (TOC)"
  ];

  return (
    <section id="education" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Education
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          My academic foundation and academic topics I've studied.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Degree Detail Card */}
        <div className="lg:col-span-5">
          <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
            {/* Glowing backdrop circle */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="inline-flex p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm">
                <GraduationCap size={28} />
              </div>
              
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Bachelor of Technology
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Computer Science & Engineering
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 leading-relaxed">
                Developing strong fundamentals in core computer science, software lifecycle workflows, databases, and network architectures.
              </p>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800/80 pt-6 mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 text-sm">
                <BookMarked size={16} className="text-indigo-500" />
                <span>Guru Ghasidas Vishwavidyalaya</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 text-sm">
                <MapPin size={16} className="text-indigo-500" />
                <span>Bilaspur, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                <Calendar size={16} className="text-indigo-500" />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>

          </div>
        </div>

        {/* Coursework Card */}
        <div className="lg:col-span-7">
          <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Relevant Coursework
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Key subjects studied during B.Tech to master structural and runtime computational fundamentals.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {courses.map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-slate-100/85 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30">
              <p className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-300 leading-relaxed text-left">
                💡 <strong>Practical CS Application:</strong> Directly applied RDBMS & Schema Normalization to design multi-role order dispatch models in <strong>Glam Beauty</strong>, and leveraged Computer Networks & OS Process concepts to engineer low-latency Socket.io WebSocket channels and debounced state persistence in <strong>Talk-Sphere</strong>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
