import { createContext, useContext } from "react";
import {
  createWork,
  getReceipt,
  getWorksByClient,
  deleteWork,
  updateAWork,
  getReceiptsByProfessionalId,
  getWorksByProfessional,
} from "../api/work";

export const WorkContext = createContext();

export const useWork = () => {
  const context = useContext(WorkContext);
  if (!context) {
    throw new Error("useWork must be used within an WorkProvider");
  }
  return context;
};

export const WorkProvider = ({ children }) => {
  const createAWork = async (work) => {
    const { data } = await createWork(work);
    return data;
  };

  const findWorksByClient = async (id) => {
    const { data } = await getWorksByClient(id);
    return data;
  };

  const findWorksByProfessional = async (id) => {
    const { data } = await getWorksByProfessional(id);
    return data;
  };

  const findReceipt = async (id) => {
    const { data } = await getReceipt(id);
    return data;
  };

  const findReceiptsByProfessionalId = async (id) => {
    const { data } = await getReceiptsByProfessionalId(id);
    return data;
  };

  const deleteAWork = async (id) => {
    const { data } = await deleteWork(id);
    return data;
  };

  const updateWork = async (id, work) => {
    const { data } = await updateAWork(id, work);
    return data;
  };

  return (
    <WorkContext.Provider
      value={{
        createAWork,
        findWorksByClient,
        findWorksByProfessional,
        findReceipt,
        deleteAWork,
        updateWork,
        findReceiptsByProfessionalId,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};
