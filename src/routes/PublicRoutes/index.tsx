import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../stores/user/useUser";

export function PublicRoutes() {
  const user = useUser((store) => store.user);

  return user ? <Navigate to="/" /> : <Outlet />;
}
