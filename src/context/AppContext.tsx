"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Region = "IN" | "US";

interface AppContextType {
  region: Region;
  setRegion: (r: Region) => void;
  isDemoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

const AppContext = createContext<AppContextType>({
  region: "IN",
  setRegion: () => {},
  isDemoOpen: false,
  openDemo: () => {},
  closeDemo: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>("IN");
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);
  return (
    <AppContext.Provider
      value={{ region, setRegion, isDemoOpen, openDemo, closeDemo }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
