import LoadingFallback from "@/components/error/LoadingFallback";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

type UnAuthGuardProps = {
  children: React.ReactNode;
}

const UnAuthGuard: React.FC<UnAuthGuardProps> = ({ children }) => {
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
    return <>{ children }</>;
  }

  if (userData?.role === "buyer") {
    return <Navigate to="/buyer" replace />;
  }

  if (userData?.role === "supplier") {
    return <Navigate to="/supplier" replace />;
  }

  return <>{ children }</>;
};

export default UnAuthGuard;
