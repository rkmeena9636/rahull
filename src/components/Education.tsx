import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* College Info */}
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Technology
                    </h3>
                    <p className="text-cyan-400 font-medium">Electronics & Communication Engineering</p>
                    <p className="text-gray-400">Arya College of Engineering & IT</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">2020 - 2024</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-gray-300 mb-2">
                        Comprehensive curriculum covering digital systems, communication protocols, 
                        embedded systems, and modern programming languages.
                      </p>
                      <p className="text-gray-400 text-sm">
                        This interdisciplinary program provided a strong foundation in both hardware 
                        and software, enabling me to bridge the gap between electronics and computer science.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-gray-300 mb-2">Active participation in technical activities:</p>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Member of Programming and Development Club</li>
                        <li>• Participated in hackathons and coding competitions</li>
                        <li>• Attended workshops on emerging technologies</li>
                        <li>• Collaborated on group projects and presentations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Subjects */}
              <div className="lg:w-1/3">
                <h4 className="text-xl font-bold text-white mb-4">Key Subjects</h4>
                <div className="space-y-3">
                  {[
                    'Digital Electronics',
                    'Microprocessors',
                    'Communication Systems',
                    'Signal Processing',
                    'Embedded Systems',
                    'Programming Languages',
                    'Network Theory',
                    'Control Systems'
                  ].map((subject) => (
                    <div key={subject} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;