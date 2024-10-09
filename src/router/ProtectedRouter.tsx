import { SelectAuthenticated } from "@/Redux/userSlice/userSlice";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  element: React.FC | React.ComponentClass;
  authRequired?: boolean;
};

const ProtectedRouter: React.FC<ProtectedRouteProps> = ({
  element: Component,
  authRequired = false,
  ...props
}) => {
  const isAuthenticated = useSelector(SelectAuthenticated);
  return (
    <>
      {!authRequired || isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to={`/login`} replace />
      )}
    </>
  );
};

export default ProtectedRouter;
