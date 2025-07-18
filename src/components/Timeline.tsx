import React from 'react';
import { Briefcase, GraduationCap, Code, Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      id: '1',
      title: 'DevOps Intern',
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      location: 'Jaipur, India',
      period: '2023 - Present',
      type: 'work' as const,
      description: 'Gained hands-on experience in containerization, CI/CD pipelines, and cloud infrastructure management.',
      achievements: [
        'Implemented Docker containerization for multiple applications',
        'Developed automated deployment pipelines using Jenkins',
        'Worked with Kubernetes for container orchestration',
        'Collaborated on cloud infrastructure projects'
      ]
    },
    {
      id: '2',
      title: 'Full Stack Development',
      company: 'Personal Projects',
      location: 'Remote',
      period: '2022 - Present',
      type: 'project' as const,
      description: 'Built multiple web applications using MERN stack and integrated AI/ML capabilities.',
      achievements: [
        'Developed responsive web applications with React',
        'Created RESTful APIs with Node.js and Express',
        'Integrated machine learning models with web interfaces',
        'Deployed applications on cloud platforms'
      ]
    },
    {
      id: '3',
      title: 'B.Tech Electronics & Communication',
      company: 'Arya College of Engineering & IT',
      location: 'Jaipur, India',
      period: '2020 - 2024',
      type: 'education' as const,
      description: 'Comprehensive education in electronics, communication systems, and emerging technologies.',
      achievements: [
        'Strong foundation in digital systems and programming',
        'Completed projects in embedded systems and IoT',
        'Participated in technical workshops and seminars',
        'Active member of coding and robotics clubs'
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'project':
        return <Code className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-cyan-500 to-blue-500';
      case 'education':
        return 'from-purple-500 to-indigo-500';
      case 'project':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Experience & Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey through education, internships, and personal projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 hidden md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black z-10 hidden md:block" />

                {/* Content */}
                <div className="md:ml-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <div className={`p-2 bg-gradient-to-r ${getColor(item.type)} rounded-lg`}>
                          {getIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 font-medium">
                            {item.company} {item.location && `• ${item.location}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
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

export default Timeline;