import React, { useState, useEffect } from 'react';

const GlowCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer animated glow */}
      <div
        className="fixed pointer-events-none z-50 opacity-40"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
          width: 64,
          height: 64,
          borderRadius: '50%',
          boxShadow: '0 0 60px 30px rgba(34,211,238,0.4), 0 0 120px 60px rgba(168,85,247,0.2)',
          filter: 'blur(8px)',
          transition: 'all 0.12s cubic-bezier(0.4,0,0.2,1)',
          position: 'fixed',
        }}
      />
      {/* Main cursor */}
      <div
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 opacity-80 pulse-glow"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.08s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </>
  );
};

export default GlowCursor;