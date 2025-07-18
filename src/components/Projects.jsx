import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Live': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ProjectCard = ({ project, featured = false }) => (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${
      featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-500 text-white p-2 rounded-full">
              <Star size={16} fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar size={14} />
            {project.year}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1"
            >
              <Tag size={12} />
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          <button
            onClick={() => setSelectedProject(project)}
            className="ml-auto text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my best work across web development, game development, and software engineering
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
            <Star className="text-yellow-500" size={24} fill="currentColor" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
                
                {/* Technical Highlights */}
                {selectedProject.technicalHighlights && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technical Highlights</h4>
                    <div className="space-y-2">
                      {selectedProject.technicalHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Architecture Overview */}
                {selectedProject.architecture && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Architecture Overview</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Frontend</div>
                        <div className="text-sm text-gray-700">{selectedProject.architecture.frontend}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Backend</div>
                        <div className="text-sm text-gray-700">{selectedProject.architecture.backend}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">Deployment</div>
                        <div className="text-sm text-gray-700">{selectedProject.architecture.deployment}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900 mb-2">CI/CD</div>
                        <div className="text-sm text-gray-700">{selectedProject.architecture.cicd}</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Key Features for Flight Planning Tool */}
                {selectedProject.keyFeatures && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Category: {selectedProject.category}</div>
                      <div>Year: {selectedProject.year}</div>
                      <div>Status: {selectedProject.status}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;