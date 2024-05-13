import { useContext } from "react";
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { Signed } = useContext(AuthContext);

  return Signed ? <Outlet /> : <Navigate to="/" />;
};
