import api from "./axios";

export const uploadImage = (id, profilePicture) =>
  api.post(`/user/upload/${id}`, profilePicture, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const findAllProfessionals = () => api.get("/user/professionals");

export const rateProfessional = (id, value) => api.put(`/user/rate/${id}`, value)
