import { createContext, useContext, useState } from "react";
import { findAllProfessionals, rateProfessional } from "../api/user";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState([]);

  const findProfessionals = async () => {
    const { data } = await findAllProfessionals();
    return data;
  };

  const onRate = async (id, value) => {
    const data = await rateProfessional(id, value)
    return data;
  }

  return (
    <UserContext.Provider
      value={{
        findProfessionals,
        onRate,
        professionals,
        setProfessionals
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
