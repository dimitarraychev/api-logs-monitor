import { createContext, useContext, useState, type ReactNode } from "react";
import type { SourceType } from "../types/Source";

interface SourceContextType {
  source: SourceType;
  setSource: (source: SourceType) => void;
}

const SourceContext = createContext<SourceContextType | undefined>(undefined);

export const useSource = () => {
  const context = useContext(SourceContext);
  if (!context) throw new Error("useSource must be used within SourceProvider");
  return context;
};

export const SourceProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSource] = useState<SourceType>("game-api");

  return (
    <SourceContext.Provider
      value={{
        source,
        setSource,
      }}
    >
      {children}
    </SourceContext.Provider>
  );
};
