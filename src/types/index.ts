import { ReactNode } from "react";

export interface IMyContextProps {
  active: string;
  setActive: (newValue: string) => void;
  scrollHandler: (id: string) => void;
}

export interface IMyProviderProps {
  children: ReactNode;
}

export interface NavItem {
  name: string;
  id: string;
}


export interface IStatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
}