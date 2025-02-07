import api from "./axios";

export const createWork = (work) => api.post("work", work);

export const getWorksByClient = (id) => api.get(`work/client/${id}`);

export const getWorksByProfessional = (id) =>
  api.get(`work/professional/${id}`);

export const getReceipt = (id) => api.get(`work/receipt/${id}`);

export const getReceiptsByProfessionalId = (id) =>
  api.get(`work/receipt/professional/${id}`);

export const deleteWork = (id) => api.delete(`work/${id}`);

export const updateAWork = (id, work) => api.put(`work/${id}`, work);
