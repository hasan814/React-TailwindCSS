import { ReactNode } from "react";
import { IconType } from "react-icons";

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

export interface IPlanProps {
  name: string;
  price: string;
  features: string[];
};


export interface IFooterLinksProps {
  title: string;
  links: string[];
}

export interface Stat {
  icon: IconType;
  value: string;
  label: string;
}