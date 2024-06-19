import React, { createContext, useState, useContext } from "react";
import {
  NameContextType,
  CityProviderProps,
} from "../interfaces/ICityContextTypes";

// Criação do contexto com tipagem
const NameForGraphContext = createContext<NameContextType | undefined>(
  undefined
);

// Hook para usar o contexto
export const useNameForGraph = (): NameContextType => {
  const context = useContext(NameForGraphContext);
  if (!context) {
    throw new Error(
      "useNameForGraph must be used within a NameForGraphProvider"
    );
  }
  return context;
};

export const NameForGraphProvider: React.FC<CityProviderProps> = ({
  children,
}) => {
  const [selectedNameForGraph, setSelectedNameForGraph] = useState<string>("");
  console.log(selectedNameForGraph);
  return (
    <NameForGraphContext.Provider
      value={{ selectedNameForGraph, setSelectedNameForGraph }}
    >
      {children}
    </NameForGraphContext.Provider>
  );
};
