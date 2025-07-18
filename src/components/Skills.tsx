import React, { useState } from 'react';
import { Code, Database, Cloud, Cpu, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Python', 'REST APIs', 'Express.js', 'MongoDB'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-6 h-6" />,
      skills: ['LangChain', 'Gemini', 'Streamlit', 'TensorFlow', 'PyTorch'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Cloud',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Google Cloud', 'AWS', 'Firebase', 'Vercel', 'Netlify'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['GitHub Actions', 'VS Code', 'Bash', 'YAML', 'Postman'],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg group-hover:shadow-lg transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < (skillIndex % 3) + 3 
                                ? `bg-gradient-to-r ${category.color}` 
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {hoveredSkill === skill && (
                      <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-black/90 backdrop-blur-sm rounded-lg border border-cyan-400/50 z-10 animate-fadeIn">
                        <p className="text-sm text-gray-300">
                          {skill === 'React' && 'Building interactive user interfaces with modern React patterns'}
                          {skill === 'Docker' && 'Containerizing applications for consistent deployment'}
                          {skill === 'LangChain' && 'Developing AI-powered applications with language models'}
                          {skill === 'Google Cloud' && 'Cloud infrastructure and serverless computing'}
                          {skill === 'Python' && 'Backend development and data science applications'}
                          {skill === 'Kubernetes' && 'Container orchestration and scalable deployments'}
                          {!['React', 'Docker', 'LangChain', 'Google Cloud', 'Python', 'Kubernetes'].includes(skill) && 
                           `Proficient in ${skill} for professional development`}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;