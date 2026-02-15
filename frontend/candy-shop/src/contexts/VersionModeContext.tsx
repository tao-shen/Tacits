import { useState, useEffect, useContext, createContext } from 'react';

interface VersionModeContextType {
  mode: 'dev' | 'user';
  setMode: (mode: 'dev' | 'user') => void;
  toggleMode: () => void;
}

const VersionModeContext = createContext<VersionModeContextType | undefined>(undefined);

export function VersionModeProvider({ children }: { children: any }) {
  const [mode, setMode] = useState<'dev' | 'user'>(() => {
    const saved = localStorage.getItem('versionMode');
    return (saved === 'user' || saved === 'dev') ? saved : 'dev';
  });

  useEffect(() => {
    localStorage.setItem('versionMode', mode);
    document.documentElement.setAttribute('data-version-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dev' ? 'user' : 'dev'));
  };

  return (
    <VersionModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </VersionModeContext.Provider>
  );
}

export function useVersionMode() {
  const context = useContext(VersionModeContext);
  if (!context) {
    throw new Error('useVersionMode must be used within VersionModeProvider');
  }
  return context;
}
