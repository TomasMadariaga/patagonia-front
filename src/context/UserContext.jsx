import { createContext, useContext, useState } from "react";
import {
  findAllProfessionals,
  rateProfessional,
  findAllUsers,
  updateuser,
  deleteuser,
  findAllClients,
} from "../api/user";

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

  const findUsers = async () => {
    const data = await findAllUsers();
    return data;
  };

  const findClients = async () => {
    const { data } = await findAllClients();
    return data;
  };

  const findProfessionals = async () => {
    const { data } = await findAllProfessionals();
    return data;
  };

  const onRate = async (id, value) => {
    const data = await rateProfessional(id, value);
    return data;
  };

  const updateUser = async (userId, user) => {
    const { id, ...rest } = user;
    const { data } = await updateuser(userId, rest);
    return data;
  };

  const deleteUser = async (id) => {
    const { data } = await deleteuser(id);
    return data;
  };

  return (
    <UserContext.Provider
      value={{
        findProfessionals,
        onRate,
        professionals,
        setProfessionals,
        findUsers,
        findClients,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
