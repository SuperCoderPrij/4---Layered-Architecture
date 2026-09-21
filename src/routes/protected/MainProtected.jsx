import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { isAuthenticated, user, isLoading } = useSelector(
    (store) => store.auth,
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  } 

  if (!user || !isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default MainProtected;
