import React, { useEffect, useState, useRef } from 'react';
import { Layout, Server, Database, Hammer } from 'lucide-react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
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
      title: "Frontend",
      icon: <Layout className="text-violet-600 dark:text-violet-400" size={22} />,
      color: "from-violet-500 to-indigo-500",
      bgLight: "bg-violet-50/80 dark:bg-violet-950/10",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-indigo-600 dark:text-indigo-400" size={22} />,
      color: "from-indigo-500 to-blue-500",
      bgLight: "bg-indigo-50/80 dark:bg-indigo-950/10",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-blue-600 dark:text-blue-400" size={22} />,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50/80 dark:bg-blue-950/10",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 70 },
      ]
    },
    {
      title: "Tools",
      icon: <Hammer className="text-pink-600 dark:text-pink-400" size={22} />,
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50/80 dark:bg-pink-950/10",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Cloudinary", level: 75 },
        { name: "Vercel", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills & Tech Stack
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          My technical expertise across frontend, backend, databases, and development tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, groupIdx) => (
          <div 
            key={groupIdx}
            className={`glass p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex flex-col justify-between ${group.bgLight}`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills bars list */}
              <div className="space-y-5">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Outer Bar */}
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      {/* Inner animated bar */}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
