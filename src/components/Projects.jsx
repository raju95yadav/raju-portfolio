import React, { useState } from 'react';
import { Search, ExternalLink, FileText, Sparkles, Shield, Cpu, Zap, ShoppingBag, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';
import talkSphereImg from '../assets/talk-sphere.png';
import glamBeautyImg from '../assets/glam-beauty.png';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      id: 'talk-sphere',
      title: 'Talk-Sphere',
      category: 'Full Stack',
      filterCategories: ['Full Stack', 'Real-Time & AI'],
      badges: ['Sub-second WebSockets', 'Integrated AI Agent', 'JWT Notes Vault', 'Cloud Media Hosting'],
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'AI API', 'JWT Auth', 'Cloudinary'],
      image: talkSphereImg,
      description: 'A high-performance real-time collaboration workspace integrating multi-room WebSocket chat, live developer notes synchronization, encrypted Cloudinary file sharing, and an embedded AI copilot.',
      liveUrl: 'https://talk-sphere-pi.vercel.app',
      githubUrl: 'https://github.com/raju95yadav/talk-sphere',
      metrics: [
        { label: 'Socket Latency', value: '< 50ms' },
        { label: 'AI Assistant', value: 'LLM Powered' },
        { label: 'File Sharing', value: 'Cloudinary Engine' },
        { label: 'Auth System', value: 'JWT Cookies' }
      ],
      features: [
        'Real-time multi-user messaging channels with presence and typing status via Socket.io',
        'Context-aware AI Assistant chatbot embedded directly into the workspace workflow',
        'Secure Cloudinary media & document upload pipeline with instant URL distribution',
        'JWT authentication with HTTP-only cookie tokens and protected middleware routes',
        'Integrated developer notes dashboard with real-time state synchronization and debounced storage',
        'Granular workspace channel controls and active user directory management'
      ],
      techDetails: [
        { name: 'React & Tailwind', role: 'Responsive glassmorphism UI & custom hooks' },
        { name: 'Node.js & Express', role: 'RESTful API gateway & WebSocket server hosting' },
        { name: 'Socket.io', role: 'Bi-directional event streaming for multi-room chat' },
        { name: 'MongoDB & Mongoose', role: 'Document persistence for chat logs, users & notes' },
        { name: 'AI API Integration', role: 'Natural language workspace assistant copilot' },
        { name: 'Cloudinary SDK', role: 'Encrypted media assets uploading and CDN delivery' }
      ],
      caseStudy: {
        problem: 'Software engineering teams and remote workers struggle with app fatigue—switching endlessly between Slack for messaging, Notion for notes, Google Drive for file hosting, and ChatGPT for AI assistance.',
        solution: 'Talk-Sphere unifies these critical productivity channels into a single, seamless web dashboard. Users communicate instantly in live rooms, write notes with automatic database debouncing, share assets, and consult an AI assistant without context switching.',
        architecture: 'Engineered as a decoupled MERN stack application. The Node/Express backend maintains continuous WebSocket channels via Socket.io for sub-50ms message delivery. MongoDB handles schema-validated persistence for users, channels, and notes, while Cloudinary handles binary media assets.',
        challenges: 'Sustaining clean client WebSocket lifecycle states during active navigation between workspace sub-pages without losing socket subscriptions. Also, preventing database write spikes while users type live notes was solved by implementing custom debouncing hooks.',
        learnings: 'Mastered real-time WebSocket state management, debounced state persistence pattern design, JWT security architectures, and integration of external LLM API engines into web workflows.'
      }
    },
    {
      id: 'glam-beauty',
      title: 'Glam Beauty',
      category: 'Full Stack',
      filterCategories: ['Full Stack', 'E-Commerce & Logistics'],
      badges: ['4 User Roles', '2FA Security Admin', 'Seller Inventory Hub', 'Driver Dispatch System'],
      tags: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', '2FA Security', 'RBAC Logistics'],
      image: glamBeautyImg,
      description: 'An enterprise-grade e-commerce & logistics portal featuring specialized user portals (Customer, Seller, Driver, Admin), Redux Toolkit state architecture, 2FA admin authentication, and seller dispatch operations.',
      liveUrl: 'https://beauty-glam-five.vercel.app',
      githubUrl: 'https://github.com/raju95yadav/beauty-glam',
      metrics: [
        { label: 'Role Systems', value: '4 User Portals' },
        { label: 'Admin Security', value: '2FA Auth' },
        { label: 'State Manager', value: 'Redux Toolkit' },
        { label: 'Order Routing', value: 'Driver Dispatch' }
      ],
      features: [
        'Multi-role access architecture: specialized dashboards for Customers, Sellers, Logistics Drivers, and System Admins',
        'Comprehensive Seller Dashboard allowing vendor inventory tracking, stock adjustments, and sales analytics',
        'Two-Factor Authentication (2FA) security layer protecting administrative control panels',
        'Custom Logistics Driver Portal enabling drivers to claim dispatch routes and update order delivery statuses',
        'Global cart and session state management powered by Redux Toolkit for seamless navigation',
        'End-to-end order processing pipeline connecting customer checkout, seller fulfillment, and driver tracking'
      ],
      techDetails: [
        { name: 'React & Redux Toolkit', role: 'Centralized state management across multi-role user flows' },
        { name: 'Node.js & Express.js', role: 'RESTful route authorization & 2FA authentication logic' },
        { name: 'MongoDB Relational Models', role: 'Schema design linking Orders, Products, Sellers, and Drivers' },
        { name: 'Role-Based Access Control', role: 'Custom RBAC middleware enforcing endpoint authorization' },
        { name: 'Tailwind CSS', role: 'Adaptive UI designs tailored for customer shopping and admin analytics' }
      ],
      caseStudy: {
        problem: 'Traditional retail storefronts lack integrated communication pipelines between independent product sellers, store administrators, and final-mile delivery carriers, resulting in order fulfillment delays and lack of accountability.',
        solution: 'Glam Beauty addresses this operational bottleneck by building a multi-tier e-commerce ecosystem. Four tailored user views (Customer storefront, Seller management hub, Driver dispatch portal, and 2FA Admin console) streamline order lifecycles from purchase to doorstep.',
        architecture: 'Powered by Node.js/Express REST APIs with MongoDB as the document database. Schema designs implement relational cross-references between order items, vendor IDs, and driver dispatch IDs. Redux Toolkit synchronizes shopping cart, user role parameters, and active delivery streams.',
        challenges: 'Designing complex MongoDB data relations to associate items from multiple distinct sellers within a single customer order to separate logistics driver pipelines, alongside securing sensitive admin endpoints with 2FA token validation.',
        learnings: 'Attained deep mastery of Redux Toolkit slice patterns, complex MongoDB schema modeling, multi-role security guard design, two-factor auth verification pipelines, and commercial e-commerce logistics workflows.'
      }
    }
  ];

  const filterOptions = ['All', 'Full Stack', 'Real-Time & AI', 'E-Commerce & Logistics'];

  // Handle Search and Filter
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter === 'All' || 
      project.category === selectedFilter || 
      project.filterCategories.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <Sparkles className="text-indigo-600 dark:text-indigo-400" size={14} />
          <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
            Full-Stack Applications
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <span>Featured Projects & Case Studies</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Production-grade applications built with real-time WebSockets, Redux Toolkit, AI API integration, multi-role security systems, and MongoDB databases.
        </p>
      </div>

      {/* Filters & Search Control Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-10">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 bg-slate-100/80 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedFilter === opt
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/60 dark:border-slate-700/60'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 flex-shrink-0">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by tech, feature, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 text-sm transition-all shadow-sm"
          />
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group glass rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800/60 hover:shadow-2xl transition-all duration-300 flex flex-col hover:scale-[1.01]"
            >
              {/* Image Preview */}
              <div className="relative h-52 sm:h-64 overflow-hidden border-b border-slate-100 dark:border-slate-800/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="bg-indigo-600/90 dark:bg-indigo-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-indigo-400/20">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Overlay Specs */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                  {project.badges.slice(0, 3).map((badge, bIdx) => (
                    <span key={bIdx} className="bg-slate-900/80 backdrop-blur-md text-indigo-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-indigo-500/30">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics Quick Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-slate-100/70 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="text-left">
                        <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">{m.label}</span>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/40 text-slate-700 dark:text-indigo-300 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>Repo</span>
                  </a>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>

                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FileText size={16} />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 glass border border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-500 dark:text-slate-400 font-medium">No projects found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Comprehensive Tabbed Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;

