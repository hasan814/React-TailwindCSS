import { IMyContextProps } from "../types";
import { createContext } from "react";

export const MyContext = createContext<IMyContextProps | undefined>(undefined)