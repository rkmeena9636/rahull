import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

interface CLIEasterEggProps {
  isActive: boolean;
  onClose: () => void;
}

const CLIEasterEgg: React.FC<CLIEasterEggProps> = ({ isActive, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to Rahul Meena\'s Terminal!',
    'Type "help" for available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const commands = {
    help: () => [
      'Available commands:',
      '  about    - Learn about Rahul',
      '  skills   - View technical skills',
      '  projects - Show recent projects',
      '  contact  - Get contact information',
      '  clear    - Clear terminal',
      '  exit     - Close terminal'
    ],
    about: () => [
      'Rahul Meena - Full Stack Developer',
      'Building Smart Web & AI Systems',
      'B.Tech in Electronics & Communication Engineering',
      'Passionate about MERN Stack, AI/ML, and DevOps'
    ],
    skills: () => [
      'Technical Skills:',
      '• Languages: Python, JavaScript, TypeScript',
      '• DevOps: Docker, Kubernetes, Jenkins, Git',
      '• Cloud: Google Cloud Platform',
      '• AI/ML: LangChain, Gemini, Streamlit',
      '• Web: React, Node.js, REST APIs'
    ],
    projects: () => [
      'Recent Projects:',
      '• AI-powered web applications',
      '• DevOps automation tools',
      '• Full-stack MERN applications',
      '• Machine learning models'
    ],
    contact: () => [
      'Get in touch:',
      '• GitHub: github.com/rkmeena9636',
      '• LinkedIn: linkedin.com/in/rahul-meena',
      '• Email: Contact via portfolio form',
      '• Twitter: @rkmeenag9636'
    ],
    clear: () => [],
    exit: () => {
      onClose();
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newOutput = [...output, `$ ${cmd}`];
    
    if (command === 'clear') {
      setOutput([]);
      return;
    }

    if (command === 'exit') {
      onClose();
      return;
    }

    if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands]();
      setOutput([...newOutput, ...result, '']);
    } else {
      setOutput([...newOutput, `Command not found: ${cmd}`, 'Type "help" for available commands.', '']);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-black border border-green-500 rounded-lg w-full max-w-4xl h-96 overflow-hidden">
        <div className="bg-green-900/20 p-2 border-b border-green-500 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">terminal@rahul-meena</span>
        </div>
        
        <div className="p-4 h-full overflow-y-auto font-mono text-sm">
          <div className="text-green-400 space-y-1">
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          
          <div className="flex items-center text-green-400 mt-2">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-green-400"
              placeholder="Type a command..."
            />
          </div>
        </div>
        
        <div className="absolute bottom-2 right-2 text-green-600 text-xs">
          Press ESC to exit
        </div>
      </div>
    </div>
  );
};

export default CLIEasterEgg;