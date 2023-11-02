import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const currentUser = useContext(CurrentUserContext);
  const navigateToHome = <Navigate to="/" replace />;
  const {pathname} = useLocation();
  const isAuth = pathname === "/signup" || pathname === "/signin";

  if (currentUser.isLoggedIn) {
    if (isAuth) {
      return navigateToHome;
    } else {
      return <Outlet />;
    }
  } else {
    if (isAuth) {
      return <Outlet />
    } else {
      return navigateToHome;
    }
  }
};
