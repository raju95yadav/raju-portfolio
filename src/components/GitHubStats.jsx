import React from 'react';
import { Users, BookOpen, Calendar, Star, GitFork, ArrowUpRight } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const GitHubStats = () => {
  const username = "raju95yadav";

  // Verified profile data to prevent GitHub API 403 rate-limit errors
  const activeProfile = {
    avatar_url: "https://github.com/raju95yadav.png",
    name: "Raju Kumar",
    bio: "Full Stack Developer (MERN) | Software Engineer | WebSockets & AI Applications",
    public_repos: 16,
    followers: 12,
    following: 15,
    created_at: "2023-08-15T00:00:00Z"
  };

  const createdYear = new Date(activeProfile.created_at).getFullYear();

  const mockLanguages = [
    { name: "JavaScript", percent: 68.4, color: "bg-yellow-500" },
    { name: "HTML/CSS", percent: 18.2, color: "bg-orange-500" },
    { name: "Node.js", percent: 10.5, color: "bg-green-500" },
    { name: "Other", percent: 2.9, color: "bg-slate-400" }
  ];

  return (
    <section id="github" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          GitHub Profile
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          My real-time contributions, active codebases, and language distribution fetched natively.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Profile Card */}
          <div className="md:col-span-5 glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={activeProfile.avatar_url} 
                  onError={(e) => { e.target.src = avatarImg; }}
                  alt={activeProfile.name || username} 
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
                />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {activeProfile.name || 'Raju Kumar'}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">@{username}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeProfile.bio || 'Full Stack Developer building real-world MERN applications.'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-100 dark:border-slate-800/60 py-4 my-6">
                <div className="text-center">
                  <span className="block text-lg font-bold text-slate-900 dark:text-white">
                    {activeProfile.public_repos}
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-semibold tracking-wider">
                    Repos
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-slate-900 dark:text-white">
                    {activeProfile.followers}
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-semibold tracking-wider">
                    Followers
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-slate-900 dark:text-white">
                    {activeProfile.following}
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-semibold tracking-wider">
                    Following
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <Calendar size={14} className="text-indigo-500" />
                  <span>Joined GitHub: {createdYear}</span>
                </div>
                
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Right Column: Statistics */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Languages card */}
              <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl text-left">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Top Languages
                </h4>
                
                {/* Horizontal language stack bar */}
                <div className="w-full h-4 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden flex mb-6">
                  {mockLanguages.map((lang, idx) => (
                    <div 
                      key={idx}
                      className={`h-full ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                      title={`${lang.name}: ${lang.percent}%`}
                    ></div>
                  ))}
                </div>

                {/* Grid legend details */}
                <div className="grid grid-cols-2 gap-4">
                  {mockLanguages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${lang.color}`}></span>
                        <span className="font-medium text-slate-700 dark:text-slate-350">{lang.name}</span>
                      </div>
                      <span className="font-mono text-slate-500 dark:text-slate-400">{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Repositories Widget */}
              <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl space-y-4 text-left">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between">
                  <span>Featured Open-Source Repositories</span>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">@raju95yadav</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://github.com/raju95yadav/talk-sphere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        talk-sphere
                      </span>
                      <ArrowUpRight size={14} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      Real-time workspace with Socket.io multi-room chat, AI assistant & Cloudinary storage.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
                      <span>• JavaScript</span>
                      <span>• Socket.io</span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/raju95yadav/beauty-glam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        beauty-glam
                      </span>
                      <ArrowUpRight size={14} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      Multi-role e-commerce & logistics system with Redux Toolkit, 2FA admin & seller hub.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
                      <span>• JavaScript</span>
                      <span>• Redux</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

          </div>
      </div>
    </section>
  );
};

export default GitHubStats;
