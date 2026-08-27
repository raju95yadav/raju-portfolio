import React, { useState } from 'react';
import { Award, CheckCircle, X, GraduationCap, Eye, ShieldCheck, CheckCircle2, ZoomIn, ZoomOut, FileText, Image } from 'lucide-react';
import nitCertImg from '../assets/nit-internship-certificate.jpg';

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('certificate'); // 'certificate' | 'details'
  const [isZoomed, setIsZoomed] = useState(false);

  const certifications = [
    {
      id: "nit-internship",
      title: "NIT Jamshedpur Research Internship",
      provider: "National Institute of Technology Jamshedpur (Dept. of CSE)",
      status: "Certified",
      isFeatured: true,
      icon: <GraduationCap className="text-indigo-500" size={20} />,
      statusBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      description: "Assigned 100% of frontend design and development work for 'Blockchain-based Access Control for Healthcare Applications' under Dr. Dinesh Kumar (Assistant Professor, CSE). Built full client-side interface & access control workflow.",
      hasImage: true,
      image: nitCertImg
    },
    {
      id: "realtime-systems",
      title: "Real-Time Systems & WebSockets",
      provider: "Talk-Sphere Architecture",
      status: "Mastered",
      icon: <CheckCircle className="text-emerald-500" size={20} />,
      statusBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      description: "Hands-on implementation of bi-directional WebSocket event channels, online user presence tracking, debounced note sync, and Cloudinary media streams."
    },
    {
      id: "fullstack-mern",
      title: "Full Stack MERN Development",
      provider: "MERN Stack Professional",
      status: "Completed",
      icon: <CheckCircle className="text-emerald-500" size={20} />,
      statusBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      description: "Validated hands-on experience building multi-tier REST architectures with MongoDB document relations, Express authorization layers, and React frontends."
    },
    {
      id: "redux-logistics",
      title: "Redux & Multi-Role Logistics Security",
      provider: "Glam Beauty E-Commerce Engine",
      status: "Mastered",
      icon: <Award className="text-indigo-500" size={20} />,
      statusBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      description: "Implemented Redux Toolkit state stores, Two-Factor Authentication (2FA) for admin panels, and 4-role RBAC portals (Customer, Seller, Driver, Admin)."
    }
  ];

  return (
    <section id="certificates" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Certifications & Internship
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Verified research internship credentials at NIT Jamshedpur and core software engineering milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, idx) => (
          <div 
            key={idx}
            className={`glass p-6 rounded-3xl border ${
              cert.isFeatured 
                ? 'border-indigo-500/40 dark:border-indigo-500/40 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 shadow-indigo-500/10' 
                : 'border-slate-200/50 dark:border-slate-800/50'
            } shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:scale-[1.01]`}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {cert.provider}
                  </p>
                </div>
                
                {/* Status Capsule */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cert.statusBg} flex-shrink-0`}>
                  {cert.icon}
                  <span>{cert.status}</span>
                </div>
              </div>

              {/* Highlight Tag for Internship */}
              {cert.isFeatured && (
                <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <ShieldCheck size={14} />
                  <span>Frontend Lead • NIT Jamshedpur</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-left">
                {cert.description}
              </p>
            </div>

            {/* Certificate Action Buttons */}
            {cert.hasImage && (
              <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  Assigned All Frontend Work
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsZoomed(false);
                      setActiveTab('details');
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-700"
                  >
                    <FileText size={14} />
                    Details Section
                  </button>
                  <button
                    onClick={() => {
                      setIsZoomed(false);
                      setActiveTab('certificate');
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <Eye size={14} />
                    View Certificate
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Internship Certificate Viewer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-900 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col max-h-[94vh]">
            {/* Modal Header with Navigation Tabs */}
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    Summer Internship Certificate
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    NIT Jamshedpur • Department of Computer Science & Engineering
                  </p>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-2">
                <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50">
                  <button
                    onClick={() => {
                      setIsZoomed(false);
                      setActiveTab('certificate');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'certificate'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Image size={15} />
                    <span>View Certificate</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsZoomed(false);
                      setActiveTab('details');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'details'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <FileText size={15} />
                    <span>Details Section</span>
                  </button>
                </div>

                {activeTab === 'certificate' && (
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                    title={isZoomed ? "Reset Zoom" : "Zoom Certificate"}
                  >
                    {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                    <span className="hidden sm:inline">{isZoomed ? "Fit Screen" : "Zoom In"}</span>
                  </button>
                )}

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Switch between Pure Certificate View and Details Section */}
            {activeTab === 'certificate' ? (
              /* VIEW CERTIFICATE SECTION: FULL CERTIFICATE IS 100% VISIBLE AT ONCE */
              <div className="p-3 sm:p-5 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950/10 dark:bg-slate-950/60 custom-scrollbar min-h-[55vh]">
                <div 
                  className={`relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white transition-all duration-300 cursor-pointer flex items-center justify-center p-2 ${
                    isZoomed ? 'w-full max-w-4xl' : 'max-w-full'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  title={isZoomed ? "Click to fit screen" : "Click to zoom in"}
                >
                  <img 
                    src={nitCertImg} 
                    alt="NIT Jamshedpur Internship Certificate - Raju Kumar" 
                    className={`bg-white transition-all duration-300 object-contain rounded-xl ${
                      isZoomed 
                        ? 'w-full h-auto max-h-none scale-100 my-2 cursor-zoom-out' 
                        : 'max-h-[68vh] sm:max-h-[73vh] w-auto h-auto mx-auto cursor-zoom-in shadow-sm'
                    }`}
                  />
                </div>
              </div>
            ) : (
              /* DETAILS SECTION: ONLY THE VERIFIED CREDENTIALS CARD IS VISIBLE */
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950/5 dark:bg-slate-950/40">
                <div className="w-full max-w-3xl p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-lg text-left">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-700/70 pb-3">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <ShieldCheck size={20} className="text-indigo-500" />
                      Verified Official Credentials
                    </h4>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                      Ref No: NITJSR/CSE/BS/34/2026
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-xs uppercase tracking-wider font-semibold">Candidate Name</span>
                      <strong className="text-slate-900 dark:text-white font-semibold text-base">Raju Kumar</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-xs uppercase tracking-wider font-semibold">Issuing Institute</span>
                      <strong className="text-slate-900 dark:text-white font-semibold text-base">NIT Jamshedpur (Dept. of CSE)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-xs uppercase tracking-wider font-semibold">Internship Supervisor</span>
                      <strong className="text-slate-900 dark:text-white font-semibold">Dr. Dinesh Kumar (Assistant Professor)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-xs uppercase tracking-wider font-semibold">Tenure & Date</span>
                      <strong className="text-slate-900 dark:text-white font-semibold">01st June 2026 – 31st July 2026</strong>
                    </div>
                    <div className="sm:col-span-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      <span className="text-slate-400 dark:text-slate-500 block text-xs uppercase tracking-wider font-semibold">Research Topic & Scope</span>
                      <p className="text-slate-800 dark:text-slate-200 font-medium mt-1 text-base">
                        "Blockchain-based Access Control for Healthcare Applications"
                      </p>
                    </div>
                    <div className="sm:col-span-2 p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                      <span>Key Responsibility: Assigned 100% of the Frontend Web Interface & Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-900/90">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                National Institute of Technology Jamshedpur • Summer Internship
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;



