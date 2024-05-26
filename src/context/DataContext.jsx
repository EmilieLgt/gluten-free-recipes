/* eslint-disable react/prop-types */
import { createContext } from "react";


export const DataContext = createContext(null);


export default function DataContextProvider({ children }) {



  return (
    <DataContext.Provider
   
    >
      {children}
    </DataContext.Provider>
  );
}
