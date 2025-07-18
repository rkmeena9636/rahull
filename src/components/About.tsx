import React from 'react';
import { User, GraduationCap, Code2, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building intelligent web applications 
                and AI systems. My journey spans across MERN stack development, machine learning, and DevOps, 
                driven by curiosity and a commitment to continuous learning.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                B.Tech in Electronics & Communication Engineering from Arya College of Engineering & IT. 
                My technical foundation combines hardware understanding with software expertise, 
                enabling me to build comprehensive solutions.
              </p>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 text-center border border-cyan-400/20">
                <Code2 className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-white mb-2">10+</h4>
                <p className="text-gray-300 text-sm">Technologies</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 text-center border border-purple-400/20">
                <Rocket className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-white mb-2">5+</h4>
                <p className="text-gray-300 text-sm">Projects</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Full Stack Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">AI & Machine Learning Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span className="text-gray-300">DevOps & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">API Development & Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;