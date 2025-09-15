import LoadingFallback from "@/components/error/LoadingFallback";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

type AuthGuardProps = {
  children: React.ReactNode;
  role?: string;
  certificate?: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, role, certificate }) => {
  const { isAuthenticated, userData = null } = useSelector((state: RootState) => state.user);
  const [checking, setChecking] = useState(true);
  console.log("Gone Through", isAuthenticated, userData)

  useEffect(() => {
    // simulate delay in reading redux / persisted state
    const timer = setTimeout(() => setChecking(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (checking) {
    return <LoadingFallback />
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if(userData?.role === role || certificate) {
    return <>{ children }</>;
  } 

  return <Navigate to="/" />

};

export default AuthGuard;
