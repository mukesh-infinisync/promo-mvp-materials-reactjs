import React from "react";
import { Outlet } from "react-router";
import AuthHeader from "./AuthHeader";
import AuthSidebar from "./AuthSidebar";
import Footer from "@/components/common/Footer";


const AuthLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <AuthHeader />

      <div className="flex flex-1 pt-[70px] overflow-hidden">
        {/* Sidebar - only visible on desktop */}
        <div className="hidden md:block">
          <AuthSidebar />
        </div>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto sm:px-6 sm:py-10 lg:px-[48px] lg:py-[60px] bg-[#F3F3F3] border-t-2 border-t-[#164B88]">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
