import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rkmeena9636',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rahul-meena',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rahul.meena.npr',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rkmeenag9636',
      icon: <Twitter className="w-5 h-5" />
    }
  ];

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2024 Rahul Meena. Built with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <p className="text-gray-500 text-sm mt-2">
            Designed and developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;