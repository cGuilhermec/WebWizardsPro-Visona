import { ReactNode } from "react";

export interface CityContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export interface NameContextType {
  selectedNameForGraph: string;
  setSelectedNameForGraph: (name: string) => void;
}

export interface CityProviderProps {
  children: ReactNode;
}