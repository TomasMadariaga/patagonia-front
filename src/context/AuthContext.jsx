import { createContext, useContext, useEffect, useState } from "react";
import {
  checkAuthStatus,
  loginRequest,
  logoutRequest,
  registerRequest,
  scheduleTokenRenewal,
} from "../api/auth";
import { uploadImage, uploadDniPhoto, uploadCriminalRecord } from "../api/user";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUserData = (newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  const signup = async (user) => {
    try {
      const { profilePicture, frontDni, backDni, criminalRecords, ...userData } = user;
  
      const { data } = await registerRequest(userData);
  
      scheduleTokenRenewal();
  
      setIsAuthenticated(true);
      setUser({
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        role: data.role,
      });

      if (data.role !== "Cliente" && data.role !== "Admin" && criminalRecords && criminalRecords[0]) {
        const criminalFormData = new FormData();
        criminalFormData.append("criminalRecord", criminalRecords[0]);
        await uploadCriminalRecords(data.id, criminalFormData);
      }
  
      if (profilePicture && profilePicture[0]) {
        const id = parseInt(data.id);
        const profileFormData = new FormData();
        profileFormData.append("profilePicture", profilePicture[0]);
        await uploadImage(id, profileFormData);
      }
  
      const dniFormData = new FormData();
  
      if (frontDni && frontDni[0]) {
        dniFormData.append("frontDni", frontDni[0]);
      }
  
      if (backDni && backDni[0]) {
        dniFormData.append("backDni", backDni[0]);
      }
  
      if (dniFormData.entries().next().done === false) {
        await uploadDniPhotos(data.id, dniFormData);
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al registrar el usuario.");
    }
  };

  const signin = async (user) => {
    try {
      const { data } = await loginRequest(user);
      localStorage.setItem("tokenExpiration", data.user.expirationDate);
      scheduleTokenRenewal(data.user.expiresIn);
      setIsAuthenticated(true);
      setUser({
        id: data.user.id,
        name: data.user.name,
        lastname: data.user.lastname,
        email: data.user.email,
        role: data.user.role,
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setIsAuthenticated(false);
      await logoutRequest();
    } catch (error) {}
  };

  const checkUser = async () => {
    try {
      const data = await checkAuthStatus();
      setIsAuthenticated(true);
      setUser({
        id: data.data.user.id,
        name: data.data.user.name,
        lastname: data.data.user.lastname,
        email: data.data.user.email,
        role: data.data.user.role,
      });
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const uploadDniPhotos = async (id, dniPhotos) => {
    const { data } = await uploadDniPhoto(id, dniPhotos);
    return data;
  };

  const uploadCriminalRecords = async (id, criminalRecord) => {
    const { data } = await uploadCriminalRecord(id, criminalRecord);
    return data;
  };

  useEffect(() => {
    const expirationDate = localStorage.getItem("tokenExpiration");
    if (expirationDate) {
      const expiresIn =
        (new Date(expirationDate).getTime() - Date.now()) / 1000;
      if (expiresIn > 0) {
        scheduleTokenRenewal(expiresIn);
      }
    }
    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        logout,
        checkUser,
        updateUserData,
        uploadDniPhotos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
