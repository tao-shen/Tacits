import { useState, useEffect, useContext, createContext } from 'react';

interface VersionModeContextType {
  mode: 'pro' | 'normal';
  setMode: (mode: 'pro' | 'normal') => void;
  toggleMode: () => void;
}

const VersionModeContext = createContext<VersionModeContextType | undefined>(undefined);

export function VersionModeProvider({ children }: { children: any }) {
  const [mode, setMode] = useState<'pro' | 'normal'>(() => {
    const saved = localStorage.getItem('versionMode');
    return (saved === 'normal' || saved === 'pro') ? saved : 'pro';
  });

  useEffect(() => {
    localStorage.setItem('versionMode', mode);
    document.documentElement.setAttribute('data-version-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'pro' ? 'normal' : 'pro'));
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
