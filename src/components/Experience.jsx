import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, ShieldCheck, CheckCircle2, GraduationCap, Eye, BookMarked } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "nit-jamshedpur",
      role: "Summer Research Intern (Frontend Lead)",
      company: "National Institute of Technology Jamshedpur",
      department: "Dept. of Computer Science & Engineering (CSE)",
      location: "Jamshedpur, India",
      period: "June 2026 – July 2026",
      type: "Research Internship",
      badge: "Assigned 100% Frontend Work",
      badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      icon: <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />,
      supervisor: "Dr. Dinesh Kumar (Assistant Professor, CSE)",
      refNo: "NITJSR/CSE/BS/34/2026",
      project: "Blockchain-based Access Control for Healthcare Applications",
      description: "Appointed as the dedicated Frontend Developer for a high-impact healthcare access control research project under the direct guidance of Dr. Dinesh Kumar at NIT Jamshedpur.",
      highlights: [
        "Assigned 100% of the frontend UI design, component architecture, and client-side access control workflow.",
        "Architected role-based user portals for patients, doctors, and medical admins to manage healthcare data permissions.",
        "Integrated client-side state handling with blockchain access control verification for secure medical record sharing.",
        "Engineered responsive, accessible React interfaces adhering to strict academic and cybersecurity standards."
      ],
      technologies: ["React.js", "Tailwind CSS", "Blockchain Access Control", "Role-Based Security", "JavaScript ES6+", "UI/UX Design"],
      hasCertificate: true
    },
    {
      id: "freelance-fullstack",
      role: "Full-Stack Web Developer & Open Source Contributor",
      company: "Independent / Project Freelance",
      department: "Web Development & WebSockets Architecture",
      location: "Remote",
      period: "2024 – Present",
      type: "Projects & Freelance",
      badge: "Production Applications",
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      icon: <Briefcase className="text-emerald-600 dark:text-emerald-400" size={24} />,
      description: "Engineered robust full-stack MERN applications featuring real-time WebSockets, state management, and multi-tier user role portals.",
      highlights: [
        "Architected Talk-Sphere: A real-time socket communication suite with embedded AI copilot assistance and live user status.",
        "Designed Glam Beauty: Enterprise e-commerce portal with 4-role RBAC authorization and Redux Toolkit state synchronization.",
        "Implemented 2FA authentication, JWT cookie encryption, and optimized REST APIs with MongoDB document relationships."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redux Toolkit", "JWT / 2FA Auth"]
    }
  ];

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

  const handleCertificateClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('certificates');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="py-12 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-4">
          <Briefcase size={14} />
          <span>Work & Research Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Experience & Achievements
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Hands-on research internship experience at NIT Jamshedpur alongside full-stack engineering accomplishments.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="glass p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
              {/* Left Column: Role Details */}
              <div className="flex-1 text-left">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mt-0.5">
                        <Building2 size={15} />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${exp.badgeBg}`}>
                    {exp.badge}
                  </span>
                </div>

                {/* Sub Metadata Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 my-4 py-2 px-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-indigo-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-indigo-500" />
                    {exp.location}
                  </span>
                  {exp.supervisor && (
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      Supervisor: {exp.supervisor}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Research Project Topic if applicable */}
                {exp.project && (
                  <div className="mb-4 p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                      Assigned Research Topic
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      "{exp.project}"
                    </p>
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Key Contributions & Achievements:
                  </span>
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate Quick Trigger Banner */}
            {exp.hasCertificate && (
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-3 flex-wrap bg-gradient-to-r from-indigo-500/5 to-purple-500/5 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <ShieldCheck size={16} className="text-indigo-500" />
                  <span>Official Research Internship Certificate (Ref: {exp.refNo})</span>
                </div>
                <a
                  href="#certificates"
                  onClick={handleCertificateClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                >
                  <Eye size={14} />
                  View Verified Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Integrated Education & Academic Background Subsection */}
      <div className="mt-20 pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Academic Background
          </h3>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-3 rounded-full"></div>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            My academic degree foundation and core computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Degree Detail Card */}
          <div className="lg:col-span-5">
            <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl h-full flex flex-col justify-between relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="space-y-6">
                <div className="inline-flex p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm">
                  <GraduationCap size={28} />
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Bachelor of Technology
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    Computer Science & Engineering
                  </h4>
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
            <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl h-full flex flex-col justify-between text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Relevant Coursework
                </h4>
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
                <p className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-300 leading-relaxed">
                  💡 <strong>Practical CS Application:</strong> Directly applied RDBMS & Schema Normalization to design multi-role order dispatch models in <strong>Glam Beauty</strong>, and leveraged Computer Networks & OS Process concepts to engineer low-latency Socket.io WebSocket channels and debounced state persistence in <strong>Talk-Sphere</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
