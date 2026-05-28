import React, { useState } from 'react';
import { Search, ExternalLink, FileText, Sparkles } from 'lucide-react';
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
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind', 'AI API'],
      image: talkSphereImg,
      description: 'A real-time workspace featuring live multi-user messaging, notes management, secure asset distributions, and an integrated AI agent chatbot.',
      liveUrl: 'https://talk-sphere-pi.vercel.app',
      githubUrl: 'https://github.com/raju95yadav/talk-sphere',
      features: [
        'Real-time messaging rooms via Socket.io',
        'AI Assistant chatbot integration',
        'Secure file sharing & media hosting',
        'JWT Authentication & session management',
        'Integrated personal notes storage dashboard',
        'Multi-user workspace settings'
      ],
      caseStudy: {
        problem: 'Recruiters and remote developers face friction shifting between communication platforms, document tools, file hubs, and AI services.',
        solution: 'Talk-Sphere groups these core workspace requirements together under a single, highly integrated layout. Users chats, query the AI, save files, and write developer notes without page jumps.',
        challenges: 'Managing multi-room messaging states dynamically and preserving clean client-side socket connections across navigations. Building real-time updates for notes required debouncing state commits.',
        learnings: 'Gained solid knowledge of WebSocket connections, secure file streaming protocols, JWT verification architectures, and scalable react state updates.'
      }
    },
    {
      id: 'glam-beauty',
      title: 'Glam Beauty',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
      image: glamBeautyImg,
      description: 'A premium cosmetics and skincare storefront equipped with a dedicated seller inventory dashboard, driver dispatch logistics, and secure verification gateways.',
      liveUrl: 'https://beauty-glam-five.vercel.app',
      githubUrl: 'https://github.com/raju95yadav/beauty-glam',
      features: [
        'Sleek catalog storefront for skin care & hair care products',
        'Interactive Seller Dashboard with sales tracking',
        'Dual factor authentication (2FA) for admin panels',
        'Custom delivery dispatch driver portal',
        'Granular role systems (Admin, Seller, Customer, Driver)',
        'Full checkout carts and order logistics handling'
      ],
      caseStudy: {
        problem: 'Traditional retail cosmetic sites miss direct coordination pipelines between active sellers, managers, and local delivery carriers, creating delivery bottlenecks.',
        solution: 'Glam Beauty creates a consolidated e-commerce system featuring distinct portals for customers, store management, third-party sellers, and logistics personnel.',
        challenges: 'Designing complex database schemas mapping order pipelines to drivers and sellers. Implementing role checks on REST routes and managing two-factor login flows.',
        learnings: 'Mastered database relationships in MongoDB, authorization patterns, e-commerce flow control, and state management via Redux.'
      }
    }
  ];

  const filterOptions = ['All', 'Full Stack'];

  // Handle Search and Filter
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <span>Featured Projects</span>
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A showcase of my recent full-stack applications with real-time sockets, role access, and dashboards.
        </p>
      </div>

      {/* Filters & Search Control Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
        
        {/* Filter Pills */}
        <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 w-full md:w-auto overflow-x-auto justify-center">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedFilter === opt
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search projects by tag or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 text-sm transition-all"
          />
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group glass rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-300 flex flex-col hover:scale-[1.01]"
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-64 overflow-hidden border-b border-slate-100 dark:border-slate-800/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-indigo-600/90 dark:bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-indigo-400/20">
                  {project.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/10 text-slate-600 dark:text-indigo-300 rounded-md">
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
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/10 transition-colors"
                  >
                    <FileText size={16} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 glass border border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-500 dark:text-slate-400">No projects found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Case Study Modal Component */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;
