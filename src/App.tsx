import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import GlowCursor from './components/GlowCursor';
import MatrixMode from './components/MatrixMode';
import CLIEasterEgg from './components/CLIEasterEgg';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isCLIMode, setIsCLIMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useKeyboardShortcuts({
    onMatrixMode: () => setIsMatrixMode(true),
    onCLIMode: () => setIsCLIMode(true)
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <SplashScreen isVisible={showSplash} />
      
      {!showSplash && (
        <>
          <ParticlesBackground />
          <ScrollProgress />
          <GlowCursor />
          
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Education />
          </main>
          
          <Footer />
          
          {/* Contact Modal */}
          <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          
          {/* Easter Eggs */}
          <MatrixMode isActive={isMatrixMode} onClose={() => setIsMatrixMode(false)} />
          <CLIEasterEgg isActive={isCLIMode} onClose={() => setIsCLIMode(false)} />
          
          {/* Floating Contact Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default App;