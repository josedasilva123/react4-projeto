import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../stores/user/useUser";

export function PrivateRoutes() {
  const user = useUser((store) => store.user);

  return user ? <Outlet /> : <Navigate to="/login" />;
}
