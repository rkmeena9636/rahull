import React, { useState } from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: '1',
      title: 'AI-Powered Web Application',
      description: 'A full-stack web application integrating machine learning models with modern React frontend and Node.js backend.',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
      githubUrl: 'https://github.com/rkmeena9636',
      liveUrl: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'DevOps Automation Pipeline',
      description: 'Automated CI/CD pipeline using Docker, Kubernetes, and Jenkins for seamless deployment workflows.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS'],
      githubUrl: 'https://github.com/rkmeena9636',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Smart Data Analytics Dashboard',
      description: 'Interactive dashboard built with React and D3.js for real-time data visualization and analytics.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/rkmeena9636',
      liveUrl: 'https://analytics.example.com',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture deployed on Google Cloud Platform with container orchestration.',
      technologies: ['Node.js', 'Express', 'Docker', 'GCP', 'Redis'],
      githubUrl: 'https://github.com/rkmeena9636',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with practical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-rotate-2 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4 animate-fadeIn">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                      <Github className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add More Project Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-rotate-2 hover:scale-105 cursor-pointer">
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">More Projects</h3>
              <p className="text-gray-400 text-sm">
                Explore additional projects and contributions on GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;