import { createContext, createElement, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);

   const handlelogin = () => {
  setLogin(true);
   };
  return (
    <AuthContext.Provider
      value={{
        login,
        handlelogin,
        totalterminated: 0,
        totalpermoted: 0,
        totalNew: 0,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
