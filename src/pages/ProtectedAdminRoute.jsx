import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from '../context/AuthContext'

export const ProtectedAdminRoute = () => {

  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user || user.role !== "Admin") {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}
