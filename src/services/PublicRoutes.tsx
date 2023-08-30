import { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PublicRoute() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PublicRoute;
