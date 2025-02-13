import api from "./axios";

export const uploadImage = (id, profilePicture) =>
  api.post(`upload/profile/${id}`, profilePicture, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const uploadWorkPhoto = (id, workPhotos) =>
  api.post(`upload/work/${id}`, workPhotos);

export const getWorkPhoto = (id) => api.get(`upload/work/${id}`);

export const deleteworkPhoto = (id, filename) => api.delete(`upload/${id}/${filename}`,)

export const findAllUsers = () => api.get("user");

export const findUser = (id) => api.get(`user/${id}`);

export const findAllProfessionals = () => api.get("user/professionals");

export const findAllClients = () => api.get("user/clients");

export const rateProfessional = (id, value) =>
  api.put(`/user/rate/${id}`, value);

export const updateuser = (id, user) => api.put(`user/${id}`, user);

export const deleteuser = (id) => api.delete(`user/${id}`);
