import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const typingText = useTypingEffect(
    'Building Smart Web & AI Systems | MERN Dev + ML/DL + DevOps | Curious & Always Learning',
    50
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      }}
    >
      {/* Profile Photo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center">
          <div
            className="relative flex items-center justify-center mb-8"
            style={{ filter: 'drop-shadow(0 0 40px #00f2fe88) drop-shadow(0 0 80px #4facfe55)' }}
          >
            <div
              className="absolute w-[150px] h-[150px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                filter: 'blur(16px)',
                zIndex: 1,
              }}
            />
            <img
              src="/profile.png"
              alt="Profile"
              className="w-[140px] h-[140px] rounded-full object-cover border-4 border-white shadow-xl"
              style={{ background: '#00f2fe', zIndex: 2 }}
            />
          </div>
          {/* Name Heading */}
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4"
            style={{
              background: 'linear-gradient(90deg, #00f2fe 0%, #4facfe 50%, #ec38bc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 32px #00f2fe44',
            }}
          >
            Rahul Meena
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 max-w-2xl text-center drop-shadow-lg">
            {typingText}
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ boxShadow: '0 2px 24px #00f2fe33' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-lg border-2 border-cyan-400 text-cyan-300 bg-transparent hover:bg-cyan-400 hover:text-white transition-all duration-200 shadow-md"
              style={{ boxShadow: '0 2px 24px #00f2fe22' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      {/* Optional: Add subtle animated background elements here for extra depth */}
    </section>
  );
};

export default Hero;

