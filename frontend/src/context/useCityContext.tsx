import React, { createContext, useState, useContext, ReactNode } from "react";
import {
  CityContextType,
  CityProviderProps,
} from "../interfaces/ICityContextTypes";

// Criação do contexto com tipagem
const CityContext = createContext<CityContextType | undefined>(undefined);

// Hook para usar o contexto
export const useCity = (): CityContextType => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};

export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
};
