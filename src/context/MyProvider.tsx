import { IMyProviderProps } from "../types";
import { MyContext } from "./MyContext";
import { useState } from "react";

export const MyProvider = ({ children }: IMyProviderProps) => {
  // ============= States ================
  const [active, setActive] = useState<string>("home");

  // ============= Functions ================
  const scrollHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ============= Rendering ================
  return (
    <MyContext.Provider value={{ active, setActive, scrollHandler }}>
      {children}
    </MyContext.Provider>
  );
};
