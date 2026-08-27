import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="text-violet-500" size={20} />,
      label: "Email Address",
      value: "pansariraju489@gmail.com",
      link: "mailto:pansariraju489@gmail.com",
      copyable: true
    },
    {
      icon: <Phone className="text-indigo-500" size={20} />,
      label: "Phone Number",
      value: "+91 9576207053",
      link: "tel:+919576207053",
      copyable: true
    },
    {
      icon: <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/raju-kumar-774497334",
      link: "https://www.linkedin.com/in/raju-kumar-774497334",
      copyable: false
    },
    {
      icon: <svg className="w-5 h-5 text-slate-800 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
      label: "GitHub Profile",
      value: "github.com/raju95yadav",
      link: "https://github.com/raju95yadav",
      copyable: false
    }
  ];

  const handleCopy = (text, idx, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Open to full-stack engineering roles, project collaborations, and freelance opportunities.
        </p>
      </div>

      <div className="max-w-xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          <div className="glass p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-xl flex flex-col justify-center gap-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              Direct Contact Channels
            </h3>
            
            <div className="space-y-4 text-left">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="relative group">
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:scale-[1.01] transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {info.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 break-all">

          
                          {info.value}
                        </span>
                      </div>
                    </div>

                    {info.copyable && (
                      <button
                        onClick={(e) => handleCopy(info.value, idx, e)}
                        className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Copy to clipboard"
                        aria-label={`Copy ${info.label}`}
                      >
                        {copiedIndex === idx ? (
                          <Check size={16} className="text-emerald-500" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    )}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800/60 pt-6 mt-2 flex items-center justify-center space-x-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <MapPin size={16} className="text-indigo-500 flex-shrink-0" />
              <span>Bilaspur, Chhattisgarh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

