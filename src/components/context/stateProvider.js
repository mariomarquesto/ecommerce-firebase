import { createContext, useReducer, useContext } from "react";

// Crear el contexto
export const StateContext = createContext();

// Proveedor del contexto
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/* Renderizar los hijos correctamente */}
  </StateContext.Provider>
);

// Hook personalizado para usar el contexto
export const useStateValue = () => useContext(StateContext);
