import React from 'react';
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { developerInfo, socialLinks } from '../data/mock';

const Footer = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      github: Github,
      linkedin: Linkedin,
      mail: Mail,
      discord: ExternalLink
    };
    const Icon = iconMap[iconName] || ExternalLink;
    return <Icon size={20} />;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">{developerInfo.name}</h3>
            <p className="text-gray-400 mb-4">
              {developerInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Game Development</li>
              <li>Full-Stack Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>{developerInfo.location}</p>
              <p>{developerInfo.availability}</p>
              <a 
                href={`mailto:${developerInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {developerInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p className="flex items-center gap-1">
                © {new Date().getFullYear()} {developerInfo.name}. Made with 
                <Heart size={16} className="text-red-500" fill="currentColor" /> 
                and lots of coffee.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>
              This portfolio showcases my journey as a developer. Each project represents 
              hours of passion, learning, and dedication to creating meaningful solutions.
            </p>
            <p className="mt-2">
              Built with React, hosted on GitHub Pages, and powered by creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;