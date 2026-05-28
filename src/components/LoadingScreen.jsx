import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing Portfolio...');

  const loadingSteps = [
    'Initializing Portfolio...',
    'Loading MERN modules...',
    'Fetching projects...',
    'Setting up responsive layout...',
    'Welcome!'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const textIndex = Math.min(
      Math.floor((progress / 100) * loadingSteps.length),
      loadingSteps.length - 1
    );
    setCurrentText(loadingSteps[textIndex]);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] animate-pulse-slow"></div>

      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated Outer Ring */}
        <div className="relative flex items-center justify-center w-28 h-28 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
          <span className="text-xl font-bold font-sans text-indigo-400">
            {progress}%
          </span>
        </div>

        {/* Text Details */}
        <h2 className="text-2xl font-bold tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-sans">
          RAJU KUMAR
        </h2>
        <p className="text-sm text-slate-400 h-6 font-mono text-center transition-all duration-300">
          {currentText}
        </p>

        {/* Flat Progress Line */}
        <div className="w-full h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
