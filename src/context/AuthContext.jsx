// import { createContext, useContext, useEffect, useState } from "react";
// import { checkAuthStatus, loginRequest, registerRequest } from "../api/auth";
// import Cookie from "js-cookie";

// export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   // const [error, setErrors] = useState([]);

//   const signup = async (user) => {
//     try {
//       const { data } = await registerRequest(user);
//       setIsAuthenticated(true);
//       setUser({ username: data.user.username, email: data.user.email });
//     } catch (error) {
//       throw new Error(error.message);
//       //cambiar a popup de error
//     }
//   };

//   const signin = async (user) => {
//     try {
//       const { data } = await loginRequest(user);
//       setIsAuthenticated(true);
//       setUser({ username: data.user.username, email: data.user.email });
//     } catch (error) {
//       throw new Error(error.message);
//       //cambiar a popup de error
//     }
//   };

//   const logout = async () => {
//     try {
//       setIsAuthenticated(false);
//       setUser(null);
//       Cookie.set("token", "");
//     } catch (error) {}
//   };

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const data = await checkAuthStatus();
//         setIsAuthenticated(true);
//         setUser({
//           username: data.data.user.username,
//           email: data.data.user.email,
//         });
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser(null);
//       }
//     };

//     checkUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
