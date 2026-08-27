import React, { useEffect, useState, useRef } from 'react';
import { Code, Layout, Database, Wrench, Sparkles, Search, Grid, BarChart2 } from 'lucide-react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [skillSearch, setSkillSearch] = useState('');
  const [viewMode, setViewMode] = useState('compact'); // 'compact' or 'detailed'
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillGroups = [
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="text-violet-600 dark:text-violet-400" size={20} />,
      color: "from-violet-500 to-indigo-500",
      skills: [
        { name: "JavaScript", level: 92, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "C", level: 85, usedIn: ["Coursework"] },
        { name: "Java", level: 80, usedIn: ["Coursework"] },
        { name: "SQL", level: 85, usedIn: ["Coursework"] }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: <Layout className="text-indigo-600 dark:text-indigo-400" size={20} />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "React (v18/19)", level: 95, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "Next.js", level: 82, usedIn: ["Full Stack Apps"] },
        { name: "Tailwind CSS", level: 95, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "Vite", level: 90, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "Socket.io", level: 88, usedIn: ["Talk-Sphere"] },
        { name: "WebRTC", level: 85, usedIn: ["Talk-Sphere"] },
        { name: "Recharts", level: 84, usedIn: ["Glam-Beauty"] },
        { name: "WaveSurfer.js", level: 82, usedIn: ["Talk-Sphere"] }
      ]
    },
    {
      id: "backend_db",
      title: "Backend & Databases",
      icon: <Database className="text-emerald-600 dark:text-emerald-400" size={20} />,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 90, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "Express 5", level: 90, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "MongoDB", level: 88, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "REST API", level: 92, usedIn: ["Talk-Sphere", "Glam-Beauty"] }
      ]
    },
    {
      id: "devops_tools",
      title: "Devops, Tools & APIs",
      icon: <Wrench className="text-pink-600 dark:text-pink-400" size={20} />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Git/GitHub", level: 92, usedIn: ["Projects"] },
        { name: "Firebase", level: 80, usedIn: ["Web Apps"] },
        { name: "Vercel", level: 88, usedIn: ["Glam-Beauty"] },
        { name: "MongoDB Atlas", level: 88, usedIn: ["Glam-Beauty"] },
        { name: "Cloudinary", level: 85, usedIn: ["Talk-Sphere", "Glam-Beauty"] },
        { name: "Postman", level: 90, usedIn: ["API Testing"] },
        { name: "Google Gemini API", level: 86, usedIn: ["Talk-Sphere"] },
        { name: "Razorpay", level: 84, usedIn: ["Glam-Beauty"] },
        { name: "JWT", level: 88, usedIn: ["Glam-Beauty"] }
      ]
    }
  ];

  const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Backend & Databases', 'Devops, Tools & APIs'];

  const filteredGroups = skillGroups.filter(group => {
    if (activeCategory !== 'All' && group.title !== activeCategory) return false;
    return true;
  }).map(group => {
    if (!skillSearch) return group;
    const filteredSkills = group.skills.filter(s => 
      s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
      s.usedIn.some(p => p.toLowerCase().includes(skillSearch.toLowerCase()))
    );
    return { ...group, skills: filteredSkills };
  }).filter(group => group.skills.length > 0);

  return (
    <section id="skills" ref={sectionRef} className="py-10 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 mb-2">
          <Sparkles className="text-indigo-600 dark:text-indigo-400" size={14} />
          <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
            Technical Skillset Matrix
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills & Technologies Applied
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mt-3 rounded-full"></div>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Technical skills extracted directly from my official resume.
        </p>
      </div>

      {/* Control Bar: Categories, View Mode & Search */}
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-stretch lg:items-center mb-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 bg-slate-100/80 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/60 dark:border-slate-700/60'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Switcher & Search Input */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle Pill */}
          <div className="flex items-center bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-800/80">
            <button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === 'compact'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title="Compact Badge Grid"
            >
              <Grid size={15} />
              <span className="hidden sm:inline">Compact</span>
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === 'detailed'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title="Detailed Progress Bars"
            >
              <BarChart2 size={15} />
              <span className="hidden sm:inline">Detailed</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-60 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search skill..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 text-xs transition-all shadow-sm"
            />
          </div>
        </div>

      </div>

      {/* Skill Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <div 
              key={group.id}
              className="glass p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg dark:shadow-2xl flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center space-x-2.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                {/* COMPACT VIEW MODE: Sleek Skill Chips */}
                {viewMode === 'compact' ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx}
                        className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs hover:border-indigo-400/50 transition-all group"
                      >
                        <span className="font-bold text-slate-900 dark:text-slate-100">{skill.name}</span>
                        <span className="text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/40 dark:border-indigo-800/40">
                          {skill.level}%
                        </span>
                        {skill.usedIn.length > 0 && (
                          <span className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
                            • {skill.usedIn[0]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* DETAILED VIEW MODE: Progress Bars */
                  <div className="space-y-4 pt-1">
                    {group.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-medium">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-slate-900 dark:text-slate-100 font-bold">
                              {skill.name}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {skill.usedIn.map((proj, pIdx) => (
                                <span 
                                  key={pIdx}
                                  className="px-1.5 py-0.5 text-[9px] font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 rounded border border-indigo-200/60 dark:border-indigo-800/60"
                                >
                                  {proj}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className="text-indigo-600 dark:text-indigo-400 font-bold font-mono text-[11px] flex-shrink-0">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="w-full h-2 bg-slate-200/90 dark:bg-slate-800/90 rounded-full overflow-hidden p-0.5 shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${group.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: animate ? `${skill.level}%` : '0%' 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10 glass border border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-600 dark:text-slate-400 font-medium text-xs sm:text-sm">No skills found matching "{skillSearch}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;


