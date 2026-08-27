import React, { useState, useEffect } from 'react';
import { Download, Eye, MessageSquare, Phone } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const words = [
    "Full-Stack Developer",
  "MERN Stack Developer",
  "Software Engineer"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(75);
      }

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative pt-20 overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Floating React */}
        <div className="absolute top-1/4 left-10 md:left-20 animate-float-slow opacity-25 dark:opacity-15">
          <div className="glass p-3 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg">
            <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 841.9 595.3">
              <path fill="currentColor" d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-22.2-12.8-57.5 1.5-98.5 35.6-59.5-39.7-124.7-39.8-140.6-29.7-27.3 17.5-31.2 68.9-15.5 131.6-62.2 19.3-102.3 50.1-102.3 82.4 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 22.2 12.8 57.5-1.5 98.5-35.6 59.5 39.7 124.7 39.8 140.6 29.7 27.3-17.5 31.2-68.9 15.5-131.6 62.2-19.3 102.3-50.1 102.3-82.4zm-343.8 0c0-29.4 35.7-57.8 90.1-75.7 14.3 54.9 37.1 104.9 65.6 145.4-53.7-18.4-85.7-44.5-85.7-69.7zm245.5-181.7c18.2 10.5 22 45.4 10.3 97-40.2-12.3-84.6-20.8-129.5-24.8 28-36.8 68.3-80.1 119.2-72.2zm-289.4 0c50.8-7.9 91.2 35.4 119.2 72.2-44.9 4-89.3 12.5-129.5 24.8-11.7-51.6-7.9-86.5 10.3-97zm-32.7 257.4c0-25.2 32-51.3 85.7-69.7 28.5 40.5 51.3 90.5 65.6 145.4-54.4-17.9-90.1-46.3-90.1-75.7zm245.5 181.7c-50.8 7.9-91.2-35.4-119.2-72.2 44.9-4 89.3-12.5 129.5-24.8 11.7 51.6 7.9 86.5-10.3 97zm10.3-247.9c41.3 3.7 80.5 10.8 115.9 20.6-28 39.9-50.2 88.5-63.7 142.1-13.5-53.6-35.8-102.2-63.7-142.1 35.4-9.8 74.6-16.9 111.5-20.6zm132.8 66.2c54.4 17.9 90.1 46.3 90.1 75.7 0 25.2-32 51.3-85.7 69.7-28.5-40.5-51.3-90.5-65.6-145.4zm-32.7 181.7c-18.2-10.5-22-45.4-10.3-97 40.2 12.3 84.6 20.8 129.5 24.8-28 36.8-68.3 80.1-119.2 72.2z" />
            </svg>
          </div>
        </div>

        {/* Floating Node.js */}
        <div className="absolute bottom-1/4 right-10 md:right-20 animate-float-medium opacity-25 dark:opacity-15">
          <div className="glass p-3 rounded-2xl flex items-center justify-center text-green-500 shadow-lg">
            <span className="font-bold font-mono text-xl">JS</span>
          </div>
        </div>

        {/* Floating MongoDB */}
        <div className="absolute top-1/3 right-1/4 animate-float-fast opacity-20 dark:opacity-10">
          <div className="glass p-3 rounded-2xl flex items-center justify-center text-emerald-600 shadow-lg">
            <span className="font-extrabold text-sm">db</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Intro Column */}
        <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Open to Work & Freelance Collaborations
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">
              Hey there, I am
            </h3>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Raju Kumar
            </h1>
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                {text}
              </span>
              <span className="w-[3px] h-6 sm:h-8 ml-1 bg-indigo-600 dark:bg-indigo-400 animate-cursor-blink"></span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-350 max-w-xl leading-relaxed">
            I architect full-stack MERN applications featuring real-time WebSockets, Redux Toolkit state stores, 2FA auth security, AI assistant integration, and MongoDB database schema design. Creator of <strong>Talk-Sphere</strong> and <strong>Glam Beauty</strong>.
          </p>

          {/* Quick Tech Badge Highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['React.js', 'Node.js & Express', 'MongoDB', 'Socket.io', 'Redux Toolkit', '2FA & JWT Auth', 'AI API Integration'].map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                {badge}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/raju95yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:scale-105 transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raju-kumar-774497334"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a
              href="tel:9406031628"
              className="p-3 rounded-xl glass border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:scale-105 transition-all"
              aria-label="Call Raju"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/raju_resume.pdf"
              download="Raju_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl glass border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Eye size={18} />
              <span>View Projects</span>
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl glass border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageSquare size={18} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Glowing Decorative Background rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 to-violet-500 rounded-3xl -rotate-3 opacity-25 group-hover:-rotate-6 transition-transform duration-500 blur-xl"></div>

            {/* Main Picture Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200/50 dark:border-slate-800/50 shadow-2xl glass p-3 hover:scale-[1.01] transition-transform duration-500">
              <img
                src={avatarImg}
                alt="Raju Kumar"
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105 select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
