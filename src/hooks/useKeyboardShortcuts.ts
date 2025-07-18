import { useEffect } from 'react';

interface KeyboardShortcuts {
  onMatrixMode: () => void;
  onCLIMode: () => void;
}

export const useKeyboardShortcuts = ({ onMatrixMode, onCLIMode }: KeyboardShortcuts) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'm' || event.key === 'M') {
        onMatrixMode();
      } else if (event.key === '~' || event.key === '`') {
        onCLIMode();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onMatrixMode, onCLIMode]);
};