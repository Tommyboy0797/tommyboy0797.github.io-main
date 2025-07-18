import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { developerInfo, stats } from '../data/mock';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Full Stack Developer', 'Aviation Software Engineer', 'Python Expert', 'JavaScript Specialist'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock CV download - in real implementation, this would download an actual CV
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Tommyboy0797_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carbon Fiber Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="carbon-fiber" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="#1a1a1a"/>
                <rect width="30" height="30" fill="#2a2a2a"/>
                <rect x="30" y="30" width="30" height="30" fill="#2a2a2a"/>
                <circle cx="15" cy="15" r="8" fill="#333333" opacity="0.5"/>
                <circle cx="45" cy="45" r="8" fill="#333333" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#carbon-fiber)"/>
          </svg>
        </div>
        
        {/* Animated geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-white/10 rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/10 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {developerInfo.name}
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="text-white font-semibold">I'm a </span>
            <span className="text-blue-400 font-semibold">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {developerInfo.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.projectsCompleted}+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.technologiesUsed}+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.yearsOfExperience}+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.happyClients}+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Clients</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={handleDownloadCV}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
    </section>
  );
};

export default Hero;