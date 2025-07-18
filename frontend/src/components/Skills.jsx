import React from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const getTechIcon = (tech) => {
    const icons = {
      'React': '⚛️',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'HTML5': '🌐',
      'CSS3': '🎨',
      'Python': '🐍',
      'Java': '☕',
      'C++': '⚙️',
      'Lua': '🌙',
      'Lua(u)': '🎮',
      'Roblox Development': '🎮',
      'Git': '📋',
      'Node.js': '🟢',
      'Express': '🚀',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘'
    };
    return icons[tech] || '🔧';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Categories */}
          <div className="space-y-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{skillCategory.category}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Proficiency</span>
                    <span className="text-sm font-semibold text-blue-600">{skillCategory.proficiency}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skillCategory.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="grid grid-cols-1 gap-3">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-2xl">{getTechIcon(tech)}</span>
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className="space-y-8">
            {/* Technical Focus Areas */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Web Development</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Game Development</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Backend Systems</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Database Design</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">88%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Currently Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Advanced React Patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Machine Learning with Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Cloud Architecture (AWS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Game Engine Development</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications & Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Full Stack Web Development</div>
                    <div className="text-sm text-gray-500">freeCodeCamp - 2023</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">React Developer</div>
                    <div className="text-sm text-gray-500">Meta - 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Python Programming</div>
                    <div className="text-sm text-gray-500">Python Institute - 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;