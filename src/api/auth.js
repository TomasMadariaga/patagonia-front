import api from "./axios";
import Cookies from "js-cookie";

export const registerRequest = (user) => api.post(`/auth/register`, user);

export const loginRequest = (user) => api.post(`/auth/login`, user);

export const checkAuthStatus = () => api.get("/auth/status");

export const scheduleTokenRenewal = (expiresIn) => {
  setTimeout(async () => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        const res = await api.post("/auth/refresh", { refresh: refreshToken });
        const newAccessToken = res.data.token;

        Cookies.set("token", newAccessToken);

        scheduleTokenRenewal(res.data.expiresIn);
      }
    } catch (err) {
      console.error("Error al renovar el token", err);
    }
  }, (expiresIn - 60) * 1000);
};

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        try {
          const res = await api.post("/auth/refresh", {
            refresh: refreshToken,
          });
          const newAccessToken = res.data.token;

          Cookies.set("token", newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return api(originalRequest);
        } catch (err) {
          console.error("Error al renovar el token", err);
          // CAMBIAR ERROR
        }
      }
    }
    return Promise.reject(error);
  }
);
