import api from "./axios";

export const uploadImage = (id, profilePicture) =>
  api.post(`/upload/profile/${id}`, profilePicture, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const findAllUsers = () => api.get("user");

export const findAllProfessionals = () => api.get("/user/professionals");

export const findAllClients = () => api.get("/user/clients");

export const rateProfessional = (id, value) =>
  api.put(`/user/rate/${id}`, value);

export const updateuser = (id, user) => api.put(`user/${id}`, user);

export const deleteuser = (id) => api.delete(`user/${id}`);
