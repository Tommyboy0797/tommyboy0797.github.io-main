import React from 'react';
import { Code, Gamepad2, Globe, Zap } from 'lucide-react';
import { developerInfo, experience } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies and best practices."
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Game Development",
      description: "Creating engaging games on Roblox platform with complex mechanics and immersive experiences."
    },
    {
      icon: <Globe size={24} />,
      title: "Multi-Platform",
      description: "Experienced across web, desktop, and gaming platforms with diverse tech stacks."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Focused",
      description: "Optimizing applications for speed, scalability, and exceptional user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions across multiple platforms and technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With a diverse background spanning multiple programming languages and platforms, 
                I specialize in creating robust, scalable applications that solve real-world problems. 
                My journey in development has taken me from building complex web applications to 
                creating immersive gaming experiences.
              </p>
              <p>
                I'm particularly passionate about clean code, performance optimization, and creating 
                intuitive user experiences. Whether it's a React frontend, a Python backend, or a 
                Lua-based game system, I approach every project with attention to detail and a 
                commitment to excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying at the forefront of technological advancement.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Focus</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Building scalable web applications with React and Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Developing innovative games on Roblox platform
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Exploring advanced TypeScript patterns and architectures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Contributing to open-source projects and communities
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 group-hover:bg-blue-600 transition-colors"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-700 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;