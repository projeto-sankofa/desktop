import { Analysis } from "@/types/analysis";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface AnalysesContextType {
  analyses: Analysis[];
  setAnalyses: (newAnalyses: Analysis[]) => void;
}

const AnalysesDatatableContext = createContext<AnalysesContextType | undefined>(
  undefined
);

export function AnalysesDatatableProvider({ children }: PropsWithChildren) {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);

  return (
    <AnalysesDatatableContext.Provider
      value={{ analyses, setAnalyses }}
    >
      {children}
    </AnalysesDatatableContext.Provider>
  );
}

export const useAnalysesDatatable = () => {
  const context = useContext(AnalysesDatatableContext);
  if (!context) {
    throw new Error("useAnalysesDatatable must be used within an AnalysesDatatableProvider");
  }
  return context;
};