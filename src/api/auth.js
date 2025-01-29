import api from "./axios";

export const registerRequest = (user) => api.post(`/auth/register`, user);

export const loginRequest = (user) => api.post(`/auth/login`, user);

export const checkAuthStatus = () => api.get("/auth/status");

export const logoutRequest = () => api.post("/auth/logout");

export const scheduleTokenRenewal = (expiresIn) => {
  setTimeout(async () => {
    try {
      const res = await api.post('/auth/refresh');
      const { expiresIn: newExpiresIn, expirationDate } = res.data;

      localStorage.setItem('tokenExpiration', expirationDate);

      scheduleTokenRenewal(newExpiresIn);
    } catch (err) {
      console.error('Error al renovar el token', err);
    }
  }, (expiresIn - 60) * 1000);
};